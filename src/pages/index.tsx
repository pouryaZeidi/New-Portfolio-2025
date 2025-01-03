import localFont from "next/font/local";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import SecondSection from "@/components/SecondSection";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="">
      
      <HeroSection/>     
      <SecondSection/>
      
    </main>
  );
}


