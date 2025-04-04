import { Inter } from "next/font/google";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import ToastWrapper from "./components/toast-wrapper";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Portfolio of Pankaj Ahuja - Software Developer",
  description:
    "This is the portfolio of Pankaj Ahuja. I am a software developer with expertise in various technologies. I am passionate about problem-solving, learning new technologies, and creating efficient solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ToastWrapper />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}