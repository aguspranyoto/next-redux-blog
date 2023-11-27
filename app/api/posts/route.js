import { NextResponse } from "next/server";
import { addPost, getPosts } from "@/lib/data";

export const GET = async (req, res) => {
  try {
    const posts = getPosts();
    return NextResponse.json(
      { message: "OK", data: posts },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }.err, {
      status: 500,
    });
  }
};

export const POST = async (req, res) => {
  const { title, body, image, comments } = await req.json();

  try {
    const post = {
      title,
      body,
      image,
      comments,
      date: new Date().toDateString(),
    };

    addPost(post);
    return NextResponse.json(
      { message: "OK", post },
      {
        status: 201,
      }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }.err, {
      status: 500,
    });
  }
};

// const posts = [];
// // GET POSTS
// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("id");

//   if (id) {
//     const detailPost = posts.find((item) => item.id === Number(id));
//     if (detailPost) {
//       return NextResponse.json({
//         status: 200,
//         message: "Success",
//         data: detailPost,
//       });
//     }
//     return NextResponse.json({
//       status: 404,
//       message: "Not Found",
//       data: {},
//     });
//   }
//   return NextResponse.json({
//     data: posts,
//   });
// }

// // PUT POSTS
// export async function PUT(request) {
//   const { id, title } = await request.json();

//   const updatedPost = { id, title, updatedAt: new Date().toISOString() };

//   return NextResponse.json({ post: updatedPost });
// }

// // POST POSTS
// export async function POST(request) {
//   const { title, content } = await request.json();

//   const createdPost = {
//     id: 1,
//     title,
//     content,
//     createdAt: new Date().toISOString(),
//   };

//   return NextResponse.json({ post: createdPost });
// }

// // DELETE POSTS
// export async function DELETE(request) {
//   const { id } = await request.json();

//   return NextResponse.json({ message: `Post with ID ${id} has been deleted.` });
// }
