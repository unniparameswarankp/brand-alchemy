import Header from './components/Header';
import Footer from './components/Footer';
import BannerCarousel from './components/BannerCarousel';
import InteractiveHomeSection from './components/InteractiveHomeSection';

export default function Home() {
  return (
    <div className="ba-wrapper">
    <Header />
    <BannerCarousel />
    <InteractiveHomeSection />
    <Footer />
    </div>
  );
}
