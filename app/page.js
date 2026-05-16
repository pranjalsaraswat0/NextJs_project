/* Homepage: Server Component — fetches initial 8 articles, renders InfiniteScroll */
import InfiniteScroll from "./components/InfiniteScroll";

export const metadata = {
  title: "Home — Infinite Articles",
};

export default async function HomePage() {
  const res = await fetch("https://dummyjson.com/posts?limit=8&skip=0", {
    cache: "no-store",
  });
  const data = await res.json();
  const initialArticles = data.posts || [];

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
        Latest Articles
      </h1>
      <p className="text-gray-500 mb-8">
        Scroll down to load more posts automatically.
      </p>
      <InfiniteScroll initialArticles={initialArticles} />
    </section>
  );
}
