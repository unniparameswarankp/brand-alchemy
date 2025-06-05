import Header from './components/Header';
import Footer from './components/Footer';
import BannerCarousel from './components/BannerCarousel';
import InteractiveHomeSection from './components/InteractiveHomeSection';
// import CaseStudyList from './components/CaseStudyList';
import OurStory from './components/OurStory';
// import ServiceList from './components/ServiceList';
import AnimatedSection from './components/AnimatedSection';
import ScrollSteps from './components/ScrollSteps';
import CaseStudiesSection from './components/CaseStudiesSection';
import LineupSlider from './components/LineupSlider';
import FloatingToggleButton from './components/FloatingToggleButton';
import Cube3D from './components/Cube3D';
// import WigglyTitle from './components/WigglyTitle';
// import WigglyTitle3D from './components/WigglyTitle3D';
export default function Home() {
  return (
    <div className="ba-wrapper">
    <Header />
    {/* <WigglyTitle3D /> */}
    {/* <WigglyTitle /> */}
    <BannerCarousel />
    <AnimatedSection />
    <OurStory />
    <InteractiveHomeSection />
    <CaseStudiesSection />
    <ScrollSteps />
    <LineupSlider />
    <Cube3D />
    {/* <CaseStudyList />
    <ServiceList /> */}
    <Footer />
    <FloatingToggleButton />
    </div>
  );
}
