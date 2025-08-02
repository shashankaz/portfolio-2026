import { notFound } from "next/navigation";
import { Metadata } from "next";

import { getAllBlogSlugs, getBlogContent } from "@/lib/blogs";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

interface BlogPostData {
  title: string;
  date: string;
  contentHtml: string;
  excerpt?: string;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogContent(slug);

  if (!post) return {};

  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(({ params }) => ({ slug: params.slug }));
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const { slug } = await params;
  const post: BlogPostData = await getBlogContent(slug);

  if (!post) return notFound();

  return (
    <article className="py-10 space-y-3">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm">{post.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        className="space-y-2"
      />
    </article>
  );
};

export default BlogPost;
