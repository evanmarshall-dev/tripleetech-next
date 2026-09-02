import NavBar from '@/components/NavBar/NavBar';
import Hero from '@/components/Hero/Hero';
import WaveDivider from '@/components/WaveDivider/WaveDivider';
import ServiceSnippets from '@/components/ServiceSnippets/ServiceSnippets';
import CybersecurityHero from '@/components/CybersecurityHero/CybersecurityHero';
import PartnerLogos from '@/components/PartnerLogos/PartnerLogos';
import Footer from '@/components/Footer/Footer';
import { BusinessJsonLd } from '@/lib/business';

const Home = () => {
  return (
    <>
      <BusinessJsonLd />
      <NavBar />
      <main id='main-content'>
        <Hero />
        <WaveDivider />
        <ServiceSnippets />
        <CybersecurityHero />
        <WaveDivider />
        <PartnerLogos />
      </main>
      <Footer />
    </>
  );
};

export default Home;
