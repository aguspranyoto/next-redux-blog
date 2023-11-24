import { Popular, Recent, ArticleDetail } from "@/components";

async function getPostsDetail(id) {
  const res = await fetch(`http://localhost:8800/posts/${id}`, {
    next: {
      revalidate: 0, //0 seconds
    },
  });
  return res.json();
}

export default async function detail({ params }) {
  const id = params.id;

  // fetch
  const posts = await getPostsDetail(id);

  return <ArticleDetail posts={posts} />;
}
