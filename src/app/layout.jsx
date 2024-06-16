import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NexSearch",
  description:
    "Built with Next.js, google API and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
