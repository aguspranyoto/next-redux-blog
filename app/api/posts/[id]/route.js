import { getById } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const id = req.url.split("posts/")[1];

    const post = getById(id);

    if (post) {
      return NextResponse.json(
        { message: "OK", data: post },
        { status: "200" }
      );
    }
    return NextResponse.json({ message: "Error" }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: "500" });
  }
};

export const PUT = async (req, res) => {
  // update a post by Id
};
export const DELETE = async (req, res) => {
  // DELETE a post by Id
};
