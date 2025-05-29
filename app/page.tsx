import Image from "next/image";
import Header from './components/Header';
import Footer from './components/Footer';
import BannerCarousel from './components/BannerCarousel';
import Link from "next/link";

export default function Home() {
  return (
    <div className="ba-wrapper">
    <Header />
    <BannerCarousel />
    <Footer />
    </div>
  );
}
