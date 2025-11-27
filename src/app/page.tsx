import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import WaveDivider from "@/components/WaveDivider/WaveDivider";
import ServiceSnippets from "@/components/ServiceSnippets/ServiceSnippets";
import MDR from "@/components/MDR/MDR";

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
      </main>
    </>
  );
};

export default Home;
