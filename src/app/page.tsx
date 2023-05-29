import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Post } from "./blog/[slug]/page";
export const dynamic = "force-dynamic";
export const revalidate = 1200;
// export const runtime = "edge";
export default async function Blog() {
  const session = getServerSession();
  if (!session) {
    redirect("/api/auth/signin");
    // return <p>You must be signed in...</p>
  }

  const posts = await fetch("http://127.0.0.1:3000/api/content", {
    cache: "no-cache",
  }).then((res) => res.json());
  return (
    <div className="text-center">
      <h1 className="title font-bold text-2xl  block cursor-pointer  pt-4 pb-3">
        Welcome to our Blogs
      </h1>
      <ul>
        <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          {posts.map((post: Post, index: number) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <div className="px-6 py-4">
                <div className="font-bold">
                  {" "}
                  <Link href={`/blog/${post.slug}`}>{post.title} </Link>
                </div>
                <p className="text-gray-700 text-base">{post.content}</p>
                <p className="text-gray-700 text-base">slug:{post.slug}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #blog
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #hassanhabibtahir
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #SSR
                </span>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}
