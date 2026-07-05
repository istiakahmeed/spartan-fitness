import { Anton, Poppins } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Spartan Fitness",
  description: "Premium fitness centers in Dhaka. Stronger Every Day. Healthier for Life.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${poppins.variable} antialiased`}
      style={{ scrollPaddingTop: "80px" }}
    >
      <body className="bg-offwhite text-dark">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
