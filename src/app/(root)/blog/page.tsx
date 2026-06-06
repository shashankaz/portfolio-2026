import { format } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";

import { getAllBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on building software, web development, and engineering.",
};

const Blog = () => {
  const blogs = getAllBlogs();

  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        {blogs.length} {blogs.length === 1 ? "post" : "posts"}
      </p>

      <div className="mt-10 space-y-5">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`} className="block">
            <div className="group hover:bg-secondary rounded-xl border border-black p-5 shadow-[3px_3px_#000] transition-all hover:scale-105 dark:border-transparent dark:shadow-none">
              <div className="mb-1 flex items-start justify-between gap-4">
                <h2 className="text-lg leading-snug font-semibold">
                  {blog.title}
                </h2>
                <span className="text-muted-foreground shrink-0 text-sm italic">
                  {format(new Date(blog.date), "d MMM yyyy")}
                </span>
              </div>
              {blog.description && (
                <p className="text-muted-foreground text-sm">
                  {blog.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
