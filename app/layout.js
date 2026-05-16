/* Root layout: html, body, Navbar, footer, children */
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Infinite Articles",
  description: "A multi-page site with infinite-scroll homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          &copy; 2026 Infinite Articles. Built with Next.js.
        </footer>
      </body>
    </html>
  );
}
