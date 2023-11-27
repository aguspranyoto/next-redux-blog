"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostDetail } from "@/store/postsSlice";
import StatusCode from "@/utils/StatusCode";
import { Comments } from "../components";

export default function ArticleDetail({ id }) {
  const dispatch = useDispatch();
  const { dataDetail: posts, status } = useSelector((state) => state.posts);

  const postDetail = posts.data || [];

  useEffect(() => {
    dispatch(getPostDetail(id));
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
      <div className="text-slate-700" key={postDetail.id}>
        <div className=" mb-6">
          <h3 className="text-2xl font-bold mb-4">{postDetail.title}</h3>
          <div className="overflow-hidden w-full mb-4">
            {postDetail.image && (
              <Image
                src={postDetail.image}
                alt="post detail image"
                width={100}
                height={100}
                className="object-cover w-full h-56"
              />
            )}
          </div>
          <p className="text-xs text-gray-300 mb-4">{postDetail.date}</p>
          <p className="text-md ">{postDetail.body}</p>
        </div>
        <div>
          <Comments posts={postDetail} />
        </div>
      </div>
    </>
  );
}
