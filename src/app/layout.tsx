import { ReactNode } from "react";
import "./globals.css";
import { Footer, Header } from "@/components/app";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div
          className={`relative flex flex-col min-h-screen ${raleway.className}`}
        >
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
