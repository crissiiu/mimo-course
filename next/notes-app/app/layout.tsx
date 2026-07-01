import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/notes">notes</Link>
          {" | "}
          <Link href="/notes/new">create new</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
