/* InfiniteScroll: Client Component — loads more articles via IntersectionObserver */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ArticleCard from "./ArticleCard";

export default function InfiniteScroll({ initialArticles }) {
  const [articles, setArticles] = useState(initialArticles);
  const [skip, setSkip] = useState(initialArticles.length);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    try {
      const res = await fetch(`/api/articles?skip=${skip}&limit=8`);
      const newArticles = await res.json();
      if (!newArticles.length) {
        setHasMore(false);
      } else {
        setArticles((prev) => [...prev, ...newArticles]);
        setSkip((prev) => prev + 8);
      }
    } catch {
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [skip, isLoading, hasMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div className="space-y-4">
      {articles.map((article, idx) => {
        const isSentinel =
          idx === Math.min(articles.length - 6, Math.max(0, articles.length - 6));

        return (
          <div key={article.id} ref={isSentinel ? sentinelRef : null}>
            <ArticleCard article={article} />
          </div>
        );
      })}

      {isLoading && (
        <div className="flex justify-center py-6">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {!hasMore && articles.length > 0 && (
        <p className="text-center text-gray-400 text-sm py-6">
          No more articles to load.
        </p>
      )}
    </div>
  );
}
