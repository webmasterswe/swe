import About from "@/components/About";
import Committee from "@/components/Committee";
import Conference from "@/components/Conference";
import Events from "@/components/Events";
import Home from "@/components/home";
import Projects from "@/components/Projects";
//import Officers from "@/components/Officers";
import Officers from "@/components/Officers";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Navbar from "@/components/Navbar";
const Page = () => {
  return (
    <>

      <Navbar />
      <Home />
      <About />
      <Officers />
      <Projects />
      <Committee />
      <Conference />
      <Events />
      <Gallery />
      <Newsletter />
      

    </>
  );
};

export default Page;
