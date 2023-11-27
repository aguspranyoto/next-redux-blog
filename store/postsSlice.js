import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "@/utils/StatusCode";

const addPost = async (postData) => {
  const response = await fetch("/api/posts", {
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

const addComment = async (id, commentData) => {
  const response = await fetch(`http://localhost:8800/posts/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
  });

  if (!response.ok) {
    throw new Error("Failed to add comment");
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

const deletePost = async (id) => {
  const response = await fetch(`http://localhost:8800/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    // Handle the case where the deletion was not successful
    throw new Error("Failed to delete post");
  }

  // Return the ID of the deleted post
  return id;
};

// Membuat async thunk untuk fetch data
export const getPosts = createAsyncThunk("posts/get", async () => {
  const data = await fetch("/api/posts");
  const result = await data.json();

  return result;
});

// Membuat async thunk untuk fetch data
export const getPostDetail = createAsyncThunk("posts/id", async (id) => {
  const data = await fetch(`/api/posts/${id}`);
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

export const addCommentAsync = createAsyncThunk(
  "posts/addComment",
  async ({ id, commentData }) => {
    const response = await addComment(id, commentData);
    return response;
  }
);

export const deletePostAsync = createAsyncThunk(
  "posts/deletePost",
  async (id) => {
    const response = await deletePost(id);
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
        const updatedPost = action.payload;
        state.data = state.data.map((post) =>
          post.id === updatedPost.id ? updatedPost : post
        );
      })
      .addCase(updatePostAsync.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
    builder
      .addCase(deletePostAsync.pending, (state) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(deletePostAsync.fulfilled, (state, action) => {
        state.status = StatusCode.IDLE;
        state.data = state.data.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePostAsync.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchPosts } = postsSlice.actions;
export default postsSlice.reducer;
