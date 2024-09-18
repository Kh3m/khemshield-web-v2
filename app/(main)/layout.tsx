import { Metadata } from "next";
import { Jost } from "next/font/google";
import ButtonTop from "../components/Buttons/ButtonTop";
import Footer from "../components/Footer/Footer";
import TopElement from "../components/Generics/TopElement";
import BottomNav from "../components/Navigation/BottomNav";
import TopNav from "../components/Navigation/TopNav";
import ContentSpacing from "../components/Spacing/ContentSpacing";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import SideDrawerItems from "./SideDrawerItems";
import { Toaster } from "sonner";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khemshield | Home",
  description: "Your Partner in Secure IT Solutions and Skill Development",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Toaster richColors />
        <TopElement />
        <ButtonTop />
        <SideDrawerItems />
        <TopNav />
        <ContentSpacing />
        {children}
        <SectionSpacing>
          <Footer />
        </SectionSpacing>
        <BottomNav />
      </body>
    </html>
  );
}
