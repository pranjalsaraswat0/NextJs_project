/* About page: describes the site */
export const metadata = {
  title: "About — Infinite Articles",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        Infinite Articles is a demonstration of Next.js nested layouts
        combined with an infinite-scroll homepage. Articles are fetched
        from the <a href="https://dummyjson.com" className="text-blue-600 underline">DummyJSON</a> API.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed">
        Each route segment uses a distinct layout to showcase how
        layouts compose in the App Router. Scroll down on the home
        page to see infinite loading in action.
      </p>
    </>
  );
}
