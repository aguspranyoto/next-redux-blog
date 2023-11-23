"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Article() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      {posts.map((item) => (
        <div className="mb-3" key={item.id}>
          <Link href={`detail/${item.id}`}>
            <h3 className="text-sm font-bold text-slate-700">{item.title}</h3>
            <p className="text-xs text-slate-700">{item.body}</p>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Article;
