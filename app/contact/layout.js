/* Contact layout: split view — decorative left panel, form on the right */
export const metadata = {
  title: "Contact — Infinite Articles",
};

export default function ContactLayout({ children }) {
  return (
    <div className="min-h-[calc(100vh-3.5rem-3.5rem)]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-full">
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-10">
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-blue-100 leading-relaxed">
              Have a question or want to collaborate? We&apos;d love to hear
              from you. Drop us a message and we&apos;ll get back to you as
              soon as possible.
            </p>
          </div>
        </div>
        <div className="p-8 md:p-12 bg-white">{children}</div>
      </div>
    </div>
  );
}
