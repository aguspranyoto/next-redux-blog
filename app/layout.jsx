import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer, Popular, Recent } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Next Redux Blog",
  description: "Developed by Agus Pranyoto",
};

async function getPosts() {
  const res = await fetch("http://localhost:8800/posts", {
    next: {
      revalidate: 0, //0 seconds
    },
  });
  return res.json();
}
export default async function RootLayout({ children }) {
  // fetch
  const posts = await getPosts();
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <Header />
        <section className="bg-base-200">
          <div className="max-w-screen-lg mx-auto md:flex px-6 gap-2 bg-base-100 min-h-screen">
            <article className="w-full md:w-4/6 pt-6">
              <div>{children}</div>
            </article>
            <div className="w-full md:w-2/6">
              <aside className="pt-6 mb-2 leading-none">
                <Popular posts={posts} />
              </aside>
              <aside className="mb-2 leading-none">
                <Recent posts={posts} />
              </aside>
            </div>
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
