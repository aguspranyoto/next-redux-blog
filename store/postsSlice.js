import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "@/utils/StatusCode";

// Fungsi untuk melakukan POST request ke server
const addPost = async (postData) => {
  const response = await fetch("http://localhost:8800/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Failed to add post");
  }

  return response.json();
};

const updatePost = async (id, postData) => {
  const response = await fetch(`http://localhost:8800/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Failed to add post");
  }

  return response.json();
};

// Membuat async thunk untuk fetch data
export const getPosts = createAsyncThunk("posts/get", async () => {
  const data = await fetch("http://localhost:8800/posts");
  const result = await data.json();

  return result;
});

// Membuat async thunk untuk fetch data
export const getPostDetail = createAsyncThunk("posts/id", async (id) => {
  const data = await fetch(`http://localhost:8800/posts/${id}`);
  const result = await data.json();

  return result;
});

// Membuat async thunk dengan createAsyncThunk
export const addPostAsync = createAsyncThunk(
  "posts/addPost",
  async (postData) => {
    const response = await addPost(postData);
    return response;
  }
);

export const updatePostAsync = createAsyncThunk(
  "posts/updatePost",
  async ({ id, postData }) => {
    const response = await updatePost(id, postData);
    return response;
  }
);

const initialState = {
  data: [],
  dataDetail: [],
  status: StatusCode.IDLE,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
    builder
      .addCase(getPostDetail.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getPostDetail.fulfilled, (state, action) => {
        state.dataDetail = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getPostDetail.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
    builder
      .addCase(addPostAsync.pending, (state) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(addPostAsync.fulfilled, (state, action) => {
        state.status = StatusCode.IDLE;
        state.data.push(action.payload);
      })
      .addCase(addPostAsync.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
    builder
      .addCase(updatePostAsync.pending, (state) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(updatePostAsync.fulfilled, (state, action) => {
        state.status = StatusCode.IDLE;

        // Update the state with the updated post
        const updatedPost = action.payload; // Assuming the API returns the updated post
        state.data = state.data.map((post) =>
          post.id === updatedPost.id ? updatedPost : post
        );
      })
      .addCase(updatePostAsync.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchPosts } = postsSlice.actions;
export default postsSlice.reducer;
