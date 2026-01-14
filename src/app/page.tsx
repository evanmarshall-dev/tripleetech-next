import NavBar from '@/components/NavBar/NavBar';
import Hero from '@/components/Hero/Hero';
import WaveDivider from '@/components/WaveDivider/WaveDivider';
import ServiceSnippets from '@/components/ServiceSnippets/ServiceSnippets';
import MDR from '@/components/MDR/MDR';
import PartnerLogos from '@/components/PartnerLogos/PartnerLogos';
import Footer from '@/components/Footer/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <WaveDivider />
      <main>
        <ServiceSnippets />
        <MDR />
        <WaveDivider />
        <PartnerLogos />
      </main>
      <Footer />
    </>
  );
};

export default Home;
