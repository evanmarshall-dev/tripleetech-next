import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import WaveDivider from "@/components/WaveDivider/WaveDivider";
import ServiceSnippets from "@/components/ServiceSnippets/ServiceSnippets";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <WaveDivider />
      <main>
        <ServiceSnippets />
      </main>
    </>
  );
};

export default Home;
