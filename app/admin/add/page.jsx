import { PostForm } from "@/components";

function Add() {
  return (
    <section className="bg-base-200">
      <div className="max-w-screen-lg mx-auto md:flex px-6 gap-2 bg-base-100 min-h-screen">
        <article className="w-full pt-6">
          <div>
            <PostForm type="add" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default Add;
