import localFont from "next/font/local";
import Welcome from "@/components/Welcome"; 
import next from "next";

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
    <main className=" bg-red-500 flex min-h-screen justify-center items-center text-white">
        homepage      
    </main>
  );
}


