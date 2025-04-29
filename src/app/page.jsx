import Home from "@/components/Home";
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
