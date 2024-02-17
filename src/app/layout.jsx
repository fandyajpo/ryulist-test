import "./globals.css";
import { Gabarito } from "next/font/google";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Anime List | Ryutaaa",
  description: "Make fiture with animes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
