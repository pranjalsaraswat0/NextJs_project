/* API route: proxies to DummyJSON with skip/limit params, returns posts array */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const skip = searchParams.get("skip") || "0";
  const limit = searchParams.get("limit") || "8";

  const res = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();

  return Response.json(data.posts || []);
}
