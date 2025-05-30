import Header from './components/Header';
import Footer from './components/Footer';
import BannerCarousel from './components/BannerCarousel';
import InteractiveHomeSection from './components/InteractiveHomeSection';
import CaseStudyList from './components/CaseStudyList';
import OurStory from './components/OurStory';
import ServiceList from './components/ServiceList';
export default function Home() {
  return (
    <div className="ba-wrapper">
    <Header />
    <BannerCarousel />
    <InteractiveHomeSection />
    <CaseStudyList />
    <OurStory />
    <ServiceList />
    <Footer />
    </div>
  );
}
