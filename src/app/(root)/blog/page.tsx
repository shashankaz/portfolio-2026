import Link from "next/link";

import { getAllBlogSlugs, getBlogData } from "@/lib/blogs";

export const metadata = {
  title: "Blogs",
  description: "Read my latest blog posts",
};

interface BlogPost {
  slug: string;
  title?: string;
  date?: string;
  content?: string;
  description?: string;
  sentiment?: string;
  [key: string]: unknown;
}

const BlogPage = async () => {
  const slugs = getAllBlogSlugs();
  const posts: BlogPost[] = slugs.map(({ params }) => getBlogData(params.slug));

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-semibold pb-4">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex items-center shadow-md hover:shadow-lg transition-shadow rounded-xl p-4"
          >
            <Link href={`/blog/${post.slug}`}>
              {post.title || "Untitled"} - {post.date || "No date"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
