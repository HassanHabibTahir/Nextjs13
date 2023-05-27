// export const revalidate = 1200; // not necessary, just for ISR demonstration
export const dynamic = "force-dynamic";
interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content", {
    cache: "force-cache",
  }).then((res) => res.json());

  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
}
