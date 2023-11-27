"use client";

import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deletePostAsync } from "@/store/postsSlice";
import StatusCode from "@/utils/StatusCode";
import { Toaster, toast } from "react-hot-toast";

function Article({ type }) {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.posts);
  const posts = data.data;

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (isConfirmed) {
      dispatch(deletePostAsync(id));
    }
  };

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
      {posts &&
        posts.map((item) => (
          <div
            className="mb-3 border border-gray-300 p-4 hover:shadow-lg"
            key={item.id}
          >
            <div className="flex justify-between items-center gap-6">
              <div>
                {type == "admin" ? (
                  <>
                    <h3 className="text-sm font-bold text-slate-700">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-700">{item.body}</p>
                  </>
                ) : (
                  <>
                    <Link href={`detail/${item.id}`}>
                      <h3 className="text-sm font-bold text-slate-700">
                        {item.title}
                      </h3>
                    </Link>
                    <Link href={`detail/${item.id}`}>
                      <p className="text-xs text-slate-700">{item.body}</p>
                    </Link>
                  </>
                )}
              </div>

              <div className="flex gap-1">
                {type !== "home" ? (
                  <>
                    <Link href={`/admin/update/${item.id}`}>
                      <button className="btn btn-sm btn-warning text-base-100">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-sm btn-error text-base-100"
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
              <Toaster />
            </div>
          </div>
        ))}
    </>
  );
}

export default Article;
