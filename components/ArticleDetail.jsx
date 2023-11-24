import React from "react";
import Link from "next/link";

export default function ArticleDetail({ posts }) {
  console.log(posts.comments);
  return (
    <>
      <div className="mb-3" key={posts.id}>
        <div>
          <h3 className="text-sm font-bold text-slate-700">{posts.title}</h3>
          <p className="text-xs text-slate-700">{posts.body}</p>
        </div>

        {posts.comments.map((item) => (
          <div key={item.id} className="text-slate-700">
            <p>{item.user}</p>
            <p>{item.comment}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </>
  );
}
