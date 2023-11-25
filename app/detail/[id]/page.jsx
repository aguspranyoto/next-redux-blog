import { Popular, Recent, ArticleDetail } from "@/components";

export default async function detail({ params }) {
  const id = params.id;

  return (
    <section className="bg-base-200">
      <div className="max-w-screen-lg mx-auto md:flex px-6 gap-6 bg-base-100 min-h-screen">
        <article className="w-full md:w-4/6 pt-6">
          <div>
            <ArticleDetail id={id} />
          </div>
        </article>
        <div className="w-full md:w-2/6">
          <aside className="pt-6 mb-2 leading-none">
            <Popular />
          </aside>
          <aside className="mb-2 leading-none">
            <Recent />
          </aside>
        </div>
      </div>
    </section>
  );
}
