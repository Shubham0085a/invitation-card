import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "शुभ विवाह निमंत्रण - राजकुमार संग अंशिका",
  description:
    "राजकुमार यादव एवं अंशिका यादव का शुभ विवाह - मंगलवार, 24 नवम्बर 2026, ग्राम व पोस्ट- वीरभानपुर, जौनपुर",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="h-full antialiased scroll-smooth">
      <head>
        <meta name="theme-color" content="#312d2a" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#ffffff] text-[#161513]">
        {children}
      </body>
    </html>
  );
}
