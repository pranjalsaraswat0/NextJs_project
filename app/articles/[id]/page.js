/* Single article page: Server Component fetching one article by ID */
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const article = await res.json();
  return {
    title: `${article.title} — Infinite Articles`,
  };
}

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "no-store",
  });
  const article = await res.json();

  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mb-4"
      >
        &larr; Back to articles
      </Link>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
        {article.title}
      </h1>
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
        <span>❤️ {article.reactions.likes}</span>
        <span>👎 {article.reactions.dislikes}</span>
        <span>👁️ {article.views} views</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {article.tags?.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {article.body}
      </p>
    </article>
  );
}
