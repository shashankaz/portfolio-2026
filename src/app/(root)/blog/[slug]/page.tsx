import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllBlogSlugs, getBlogContent } from "@/lib/blogs";

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => getAllBlogSlugs();

export const generateMetadata = async ({
  params,
}: BlogPostProps): Promise<Metadata> => {
  const { slug } = await params;
  try {
    const { title, description } = await getBlogContent(slug);
    return { title, description };
  } catch {
    return { title: "Post not found" };
  }
};

const BlogPost = async ({ params }: BlogPostProps) => {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogContent(slug);
  } catch {
    notFound();
  }

  return (
    <div className="py-10">
      <Link
        href="/blog"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" /> All posts
      </Link>

      <div className="mt-8">
        <h1 className="text-3xl leading-tight font-semibold">{post.title}</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          {format(new Date(post.date), "d MMMM yyyy")}
        </p>
        {post.description && (
          <p className="text-muted-foreground mt-3 border-l-4 border-black pl-4 text-base italic dark:border-zinc-600">
            {post.description}
          </p>
        )}
      </div>

      <div
        className="prose mt-10"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
};

export default BlogPost;
