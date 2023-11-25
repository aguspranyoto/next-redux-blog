import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { StoreProvider } from "@/store/StoreProvider";

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
    <StoreProvider>
      <html lang="en" data-theme="light">
        <body className={poppins.className}>
          <Header />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
