import Navbar from "@/components/Navbar";
import React from "react";

const Conference = () => {
  const oval = (color) => ({
    width: "100%",
    height: "150px",
    borderRadius: "50%",
    position: "relative",
    top: "-75px",
    overflow: "hidden",
    backgroundColor: color,
    clipPath: "ellipse(100% 60% at 50% 100%)",
  });

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#b2a6bb] flex flex-col items-center">
        {/* Background square behind the intro + image section */}
        <div className="w-full bg-[#f2f2f2] pt-16 pb-20">
          {/* Intro + Image Section */}
          <div className="w-[90%] max-w-[1200px] bg-[#f2f2f2] mx-auto flex flex-col md:flex-row items-center">
            {/* Just Intro Section */}
            <div className="md:w-2/3 text-left">
              <h1 className="text-[#5A5476] text-4xl font-bold">
                Attend SWE Conferences
              </h1>
              <h2 className="text-[#5A5476] text-[20px] font-bold mt-2">
                Connect, Inspire, and Lead in Engineering
              </h2>
              <p className="text-[#000000] text-lg font-medium mt-4 max-w-[800px]">
                Experience transformative events that celebrate women in STEM.
                Dive into workshops, career fairs, and networking sessions
                focused on leadership, innovation, and professional growth in
                fields like technology, sustainability, healthcare, and more.
              </p>
            </div>

            {/* PNG Image */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src="/triangle.png"
                alt="Conference Image"
                className="max-w-[270px] h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Half oval under intro */}
        <div style={oval("#f2f2f2")}></div>

        {/* SWE Local Conferences */}
        <div className="w-[100%] max-w-[1200px] bg-[#f2f2f2] mx-auto p-8 rounded-xl shadow-lg text-left">
          {/* Conference Info */}
          <a
            href="https://welocal.swe.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-[#5A5476] text-3xl hover:text-blue-800 font-bold">
              SWE Local Conferences
            </h2>
          </a>
          <p className=" text-[#000000] text-lg font-medium mt-2">
            SWE Local conferences deliver the essence of SWE’s mission on a
            regional scale, offering tailored experiences for participants at
            every stage of their collegiate and professional journeys. These
            events foster connection through dynamic professional development
            sessions, inspirational speakers, and intimate networking
            opportunities. Whether you’re looking to learn, grow, or connect
            with like-minded engineers, WE Local conferences provide the perfect
            platform to make a lasting impact.{" "}
          </p>
        </div>

        <div className="mt-20"></div>

        {/* SWE National Conferences with Images */}
        <div className="max-w-[1200px] flex items-start justify-between space-x-6">
          {/* Images Section */}
          <img
            src="/groupswe24.png"
            alt="Group SWE 24 Photo"
            className="w-[25%] h-auto"
          />
          <img
            src="/welcomeswe24.png"
            alt="Welcome SWE 24"
            className="w-[25%] h-auto"
          />
          {/* SWE National Conferences */}
          <div className="w-[50%] bg-[#f2f2f2] mx-auto p-8 rounded-xl shadow-lg text-left">
            {/* Conference Info */}
            <a
              href="https://we25.swe.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-[#5A5476] text-3xl hover:text-blue-800 font-bold">
                SWE National Conferences
              </h2>
            </a>
            <p className="max-w-[800px] text-[#000000] text-lg font-medium mt-2">
              SWE's Annual Conferences are one of the largest and most
              influential professional development events for women in
              engineering and technology. This flagship event brings together
              collegiate and professional members from around the world to
              network, share knowledge, and celebrate achievements in STEM.
              Attendees have access to a diverse array of workshops, technical
              sessions, and an expansive career fair featuring top employers.
            </p>
          </div>
        </div>

        {/* Half oval under conference info */}
        <div className="relative w-full bg-[#f2f2f2]">
          <div style={oval("#b2a6bb")} />
          <div className="p-1 z-10 text-left"></div>
        </div>

        {/* Upcoming Conferences */}
        <div className="relative w-full bg-[#f2f2f2] pb-20 text-center mt-[-50px]">
          <div className="mt-10 text-[#5a5574] text-lg">
            Explore All Upcoming Conferences and Opportunities!
          </div>
          <a href="/events" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-10 py-4  bg-[#FDD75C] text-[#7D688F] text-lg font-medium rounded-[45px] shadow-lg">
              View All Upcoming Events
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Conference;
