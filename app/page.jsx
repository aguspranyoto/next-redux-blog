import { Popular, Recent, Article } from "@/components";

export default function Home() {
  return (
    <section className="bg-base-200">
      <div className="max-w-screen-lg mx-auto md:flex bg-base-100 min-h-screen">
        <article className="w-full md:w-4/6 pt-6 pl-9">
          <div>
            <Article />
          </div>
        </article>
        <div className="w-full md:w-2/6">
          <aside className="pt-6 mb-2 px-9 leading-none">
            <Popular />
          </aside>
          <aside className="mb-2 px-9 leading-none">
            <Recent />
          </aside>
        </div>
      </div>
    </section>
  );
}
