/* About layout: narrow centered column, light gray background, larger typography */
export const metadata = {
  title: "About — Infinite Articles",
};

export default function AboutLayout({ children }) {
  return (
    <div className="min-h-[calc(100vh-3.5rem-3.5rem)] bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4">{children}</div>
    </div>
  );
}
