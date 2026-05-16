/* Articles layout: two-column with a left sidebar (static tag filters) */
export const metadata = {
  title: "Articles — Infinite Articles",
};

const tags = ["history", "american", "crime", "french", "fiction", "english", "magical", "love", "mystery"];

export default function ArticlesLayout({ children }) {
  return (
    <div className="min-h-[calc(100vh-3.5rem-3.5rem)] bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <aside className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 h-fit md:sticky md:top-20">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
            Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
