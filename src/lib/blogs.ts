import fs from "fs";
import path from "path";
import { compareDesc } from "date-fns";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "blogs");

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  sentiment: string;
}

export const getAllBlogs = (): BlogMeta[] => {
  const files = fs.readdirSync(blogDirectory).filter((f) => f.endsWith(".md"));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(blogDirectory, filename);
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      return {
        slug,
        title: typeof data.title === "string" ? data.title : "Untitled",
        date: typeof data.date === "string" ? data.date : "",
        description:
          typeof data.description === "string" ? data.description : "",
        sentiment: typeof data.sentiment === "string" ? data.sentiment : "",
      };
    })
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
};

export const getAllBlogSlugs = () => {
  return fs
    .readdirSync(blogDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => ({ slug: filename.replace(/\.md$/, "") }));
};

export const getBlogContent = async (slug: string) => {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const title = typeof data.title === "string" ? data.title : "Untitled";
  const description =
    typeof data.description === "string" ? data.description : "";
  const sentiment = typeof data.sentiment === "string" ? data.sentiment : "";
  const date = typeof data.date === "string" ? data.date : "";

  const contentHtml = (
    await remark().use(remarkGfm).use(html).process(content)
  ).toString();

  return { slug, title, description, sentiment, date, contentHtml };
};
