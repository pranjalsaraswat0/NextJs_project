/* ArticleCard: displays a single article with title, excerpt, reactions, and link */
"use client";
import Link from "next/link";

export default function ArticleCard({ article }) {
  const excerpt =
    article.body.length > 150
      ? article.body.slice(0, 150) + "…"
      : article.body;

  return (
    <article className="group bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-gray-200 transition-all">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
          <Link href={`/articles/${article.id}`}>{article.title}</Link>
        </h2>
        <span className="shrink-0 text-xs text-gray-400 mt-1">
          #{article.id}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{excerpt}</p>
      <div className="flex items-center gap-3 text-xs text-gray-400">
        <span>❤️ {article.reactions.likes}</span>
        <span>👎 {article.reactions.dislikes}</span>
        {article.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
