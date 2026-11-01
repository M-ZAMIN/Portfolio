import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "ZAMIN RAZZAQ - Frontend Developer|Portfolio",
//   description: "Muhammad Zamin Portfolio Website",
// };

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "ZAMIN RAZZAQ - Frontend Developer | Portfolio",
  description: "Muhammad Zamin Portfolio Website",

  icons: {
    icon: "/globe.svg",
  },

  openGraph: {
    title: "ZAMIN RAZZAQ - Frontend Developer | Portfolio",
    description: "Muhammad Zamin Portfolio Website",
    images: ["/image/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
