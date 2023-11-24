import { Home } from "@/components";

async function getPosts() {
  const res = await fetch("http://localhost:8800/posts", {
    next: {
      revalidate: 0, //0 seconds
    },
  });
  return res.json();
}

export default async function HomePage() {
  // fetch
  const posts = await getPosts();

  return <Home posts={posts} />;
}
