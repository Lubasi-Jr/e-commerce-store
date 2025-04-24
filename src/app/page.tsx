import Banner from "@/features/home/components/Banner";
import Categories from "@/features/home/components/Categories";
import PromoBanner from "@/features/home/components/PromoBanner";
import BestSellers from "@/features/home/components/BestSellers";
import SpinToWin from "@/features/home/components/SpinToWin";
import NewsLetter from "@/features/home/components/NewsLetter";
import Image from "next/image";

export default function Home() {
  return (
    <div id="homepage" className="min-h-screen px-0 w-full">
      {/* Banner */}
      <Banner />
      {/* Categories we offer */}
      <Categories />
      {/* Promo for turnable */}
      <PromoBanner />
      {/* Best sellers */}
      <BestSellers />
      {/* Spin to win */}
      <SpinToWin />
      {/* Newsletter */}
      <NewsLetter />
    </div>
  );
}
