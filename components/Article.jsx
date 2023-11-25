"use client";

import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "@/store/postsSlice";
import StatusCode from "@/utils/StatusCode";

function Article() {
  const dispatch = useDispatch();
  const { data: posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (status === StatusCode.LOADING) {
    return (
      <div className="w-3/5 mx-auto flex justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (status === StatusCode.ERROR) {
    return (
      <div className="flex  ">
        <div role="alert" className="alert alert-error w-3/5 mx-auto flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-white">
            Something went wrong! Try again later
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      {posts.length &&
        posts.map((item) => (
          <div
            className="mb-3 border border-gray-300 p-4 hover:shadow-lg"
            key={item.id}
          >
            <Link href={`/admin/update/${item.id}`}>
              <h3 className="text-sm font-bold text-slate-700">{item.title}</h3>
              <p className="text-xs text-slate-700">{item.body}</p>
            </Link>
          </div>
        ))}
    </>
  );
}

export default Article;
