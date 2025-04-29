import React from "react";
import Upcoming from "@/components/Upcoming";
import Navbar from "@/components/Navbar";

const Events = () => {
  const oval = (color) => ({
    width: "100%",
    height: "150px",
    borderRadius: "50%",
    position: "relative",
    top: "-75px",
    overflow: "hidden",
    backgroundColor: color,
    clipPath: "ellipse(100% 60% at 50% 100%)", // Cuts the top part
  });

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#b2a6bb] flex flex-col items-center">
        {/* General Body Meetings (GBMs) */}
        <div className="w-full bg-[#f2f2f2] pt-20 pb-20 text-center flex flex-col items-center">
          <h1 className="py-4  text-[#5A5476] text-4xl font-bold text-center">
            General Body Meetings (GBMs)
          </h1>
          <h2 className=" text-[#000000] max-w-[1200px] text-2xl mt-10">
            Our GBMs provide opportunities to build leadership skills, network
            with professionals from top companies, and collaborate with
            like-minded peers passionate about making a difference in STEM.
            Whether you're a SWE member or new to the club, all undergraduates
            are welcome to join us in person!
          </h2>
        </div>

        <div style={oval("#b2a6bb")}></div>

        {/* Evening with Industry (EWI) */}
        <div className="w-full bg-[#b2a6bb] text-center flex flex-col items-center">
          <h1 className="pt-4 text-[#FDFAED] text-4xl font-bold text-center">
            Evening with Industry (EWI)
          </h1>
          <h1 className="text-[#F2F2F2] max-w-[1200px] text-2xl mt-10">
            Evening with Industry is SWE’s signature annual networking event,
            designed to bring together engineering students and industry
            representatives in a welcoming atmosphere. This event provides a
            unique opportunity to explore career paths, learn about industry
            trends, and build meaningful professional connections.
          </h1>
        </div>

        <div className="mt-20"></div>

        {/* Half oval under conference info */}
        <div className="relative w-full bg-[#f2f2f2]">
          <div style={oval("#b2a6bb")} />
          <div className="p-1 z-10 text-left"></div>
        </div>
      </div>
      <Upcoming />
    </>
  );
};
export default Events;
