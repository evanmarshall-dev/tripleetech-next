import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import WaveDivider from "@/components/WaveDivider/WaveDivider";
import ServiceHighlight from "@/components/ServiceHighlight/ServiceHighlight";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <WaveDivider />
      <main>
        <ServiceHighlight />
      </main>
    </>
  );
};

export default Home;
