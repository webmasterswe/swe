import Committee from "@/components/Committee";
import Conference from "@/components/Conference";
import Events from "@/components/Events";
import Home from "@/components/home";
import Projects from "@/components/Projects";
import Officers from "@/components/Officers";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Navbar from "@/components/Navbar";
import ShortAbout from "@/components/ShortAbout";
import Upcoming from "@/components/Upcoming";
const Page = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <Home />
      <ShortAbout />
      <Upcoming />
      <Newsletter />
    </>
  );
};

export default Page;
