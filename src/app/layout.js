import { Anton, Poppins } from "next/font/google";
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
  title: "Spartan Gym",
  description: "Premium fitness training for the relentless.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${poppins.variable} antialiased scroll-smooth`}
      style={{ scrollPaddingTop: "80px" }}
    >
      <body className="bg-offwhite text-dark">{children}</body>
    </html>
  );
}
