import { ArrowUpRight } from "lucide-react";

interface BlogsProps {
  forwardedRef: React.Ref<HTMLDivElement>;
}

const Blogs = ({ forwardedRef }: BlogsProps) => {
  const posts = [
    {
      title: "GitHub Spark: AI-Powered App Development for Everyone",
      slug: "github-spark-ai-powered-app-development-for-everyone",
    },
  ];

  return (
    <div ref={forwardedRef} className="py-10">
      <h1 className="text-2xl font-semibold border-b border-black pb-2 w-1/2">
        Blogs
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
        {posts.map((post, index) => (
          <div key={index} className="relative group">
            <div className="aspect-square shadow-md hover:shadow-lg transition-shadow rounded-xl">
              <div className="p-4 h-full">
                <h3 className="text-2xl font-medium line-clamp-5">
                  {post.title}
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-xl group-hover:opacity-100 duration-200 opacity-0 grid place-content-center">
              <button
                onClick={() => {
                  window.open(`/blog/${post.slug}`);
                }}
                className="bg-black rounded-full p-3 group-hover:scale-110 transition-transform"
              >
                <ArrowUpRight className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
