import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayur Mahadev Gund | Lecturer & Builder",
  description: "Teaching technology. Building the future.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
