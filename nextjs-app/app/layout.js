import "./globals.css";

export const metadata = {
  title: "The Bennett Family",
  description: "A fictitious family web page built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
