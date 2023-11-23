import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    image: "/blog.jpg",
    title: "Pengenalan JavaScript",
    body: "JavaScript adalah bahasa pemrograman tingkat tinggi yang sering digunakan untuk pengembangan web.",
    date: "November 20, 2023 14:30:00",
  },

  {
    id: 2,
    image: "/blog.jpg",
    title: "Cara Menggunakan React",
    body: "React adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna yang interaktif.",
    date: "November 21, 2023 15:45:00",
  },

  {
    id: 3,
    image: "/blog.jpg",
    title: "Tips Efektif Belajar Pemrograman",
    body: "Belajar pemrograman memerlukan dedikasi dan praktik konsisten. Berikut beberapa tips untuk mempercepat pembelajaran Anda.",
    date: "November 22, 2023 12:15:00",
  },
];

const Popular = () => {
  return (
    <div className="border border-slate-700">
      <div className="bg-slate-700 p-2">
        <h3 className="text-base-100 text-sm">Recent</h3>
      </div>
      <div className="bg-base-100 p-2">
        {blogPosts.map((item) => (
          <div className="text-slate-700 mb-2 flex gap-1 items-center">
            <div className="w-20 flex-none">
              <Image
                src={item.image}
                width={300}
                height={300}
                className="aspect-w-3 aspect-h-4"
                alt="popular image"
              />
            </div>
            <div>
              <p className="text-sm">{item.title}</p>
              <span className="text-xs text-gray-300">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
