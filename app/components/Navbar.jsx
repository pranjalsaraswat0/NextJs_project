/* Navbar: navigation links using Next.js Link */
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-14 px-4">
        <Link href="/" className="text-lg font-bold text-blue-600 tracking-tight">
          📰 InfiniteArticles
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-blue-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
