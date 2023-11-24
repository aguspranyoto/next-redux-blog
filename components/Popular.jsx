import React from "react";
import Image from "next/image";

const Popular = ({ posts }) => {
  return (
    <div className="border border-slate-700">
      <div className="bg-slate-700 p-2">
        <h3 className="text-base-100 text-sm">Terpopuler</h3>
      </div>
      <div className="bg-base-100 p-2">
        {posts.map(
          (item, i) =>
            i < 5 && (
              <div
                className="text-slate-700 mb-2 flex gap-1 items-center"
                key={item.id}
              >
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
            )
        )}
      </div>
    </div>
  );
};

export default Popular;
