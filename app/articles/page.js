/* Articles listing page: directs users to the homepage for infinite scroll */
import Link from "next/link";

export const metadata = {
  title: "Articles — Infinite Articles",
};

export default function ArticlesPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">All Articles</h2>
      <p className="text-gray-500 mb-4">
        Browse infinite-scroll articles on our homepage.
      </p>
      <Link
        href="/"
        className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
