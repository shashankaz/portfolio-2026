import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "blogs");

export const getAllBlogSlugs = () => {
  return fs.readdirSync(blogDirectory).map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.md$/, ""),
      },
    };
  });
};

export const getBlogData = (slug: string) => {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    slug,
    ...matterResult.data,
    content: matterResult.content,
  };
};

export const getBlogContent = async (slug: string) => {
  const { content, ...data } = getBlogData(slug);
  const meta = data as {
    title?: string;
    date?: string;
    description?: string;
    sentiment?: string;
  };
  const title = typeof meta.title === "string" ? meta.title : "Untitled";
  const description =
    typeof meta.description === "string" ? meta.description : "";
  const sentiment = typeof meta.sentiment === "string" ? meta.sentiment : "";
  const date = typeof meta.date === "string" ? meta.date : "";

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    title,
    description,
    sentiment,
    date,
    slug,
    contentHtml,
  };
};
