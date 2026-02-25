import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verses — Lock Screen Wallpapers for Poems",
  description:
    "Create beautiful lock screen wallpapers featuring your favorite poems. Choose a device, pick a poem, select a theme, and download a pixel-perfect PNG.",
  openGraph: {
    title: "Verses — Lock Screen Wallpapers for Poems",
    description:
      "Create beautiful lock screen wallpapers featuring your favorite poems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Spectral:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
