"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "@/store/postsSlice";
import StatusCode from "@/utils/StatusCode";

//{ product.displayImage && ( <Image src={product.displayImage} width="300" height="500"  /> ) }

const Popular = () => {
  const dispatch = useDispatch();
  const { data: posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const filterPostinganTerpopuler = (posts) => {
    // Menyalin data agar tidak memodifikasi data asli
    const copiedData = JSON.parse(JSON.stringify(posts)); // Mengurutkan postingan berdasarkan jumlah komentar secara menurun
    copiedData.sort((a, b) => b.comments.length - a.comments.length); // Mengambil tiga postingan pertama
    const limaPostinganTerpopuler = copiedData.slice(0, 5);
    return limaPostinganTerpopuler;
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
    <div className="border border-slate-700">
      <div className="bg-slate-700 p-2">
        <h3 className="text-base-100 text-sm">Terpopuler</h3>
      </div>
      <div className="bg-base-100 p-2">
        {filterPostinganTerpopuler(posts).map(
          (item, i) =>
            i < 5 && (
              <div
                className="text-slate-700 mb-2 flex gap-1 items-center"
                key={item.id}
              >
                <div className="w-20 flex-none">
                  <Link href={`/detail/${item.id}`}>
                    {item.image && (
                      <Image
                        src={item.image}
                        width={100}
                        height={100}
                        className="aspect-w-3 aspect-h-4"
                        alt="popular image"
                      />
                    )}
                  </Link>
                </div>
                <div>
                  <Link href={`/detail/${item.id}`}>
                    <p className="text-md">{item.title}</p>
                  </Link>
                  <Link href={`/detail/${item.id}`}>
                    <span className="text-xs text-gray-300">{item.date}</span>
                  </Link>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Popular;
