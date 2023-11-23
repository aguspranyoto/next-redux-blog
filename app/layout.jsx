import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Next Redux Blog",
  description: "Developed by Agus Pranyoto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
