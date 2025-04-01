import React from "react";

const ShortAbout = () => {
  return (
    <div className="flex container mx-auto my-16 h-72">
      <div className="place-content-center w-1/3 flex flex-col justify-center items-center">
        <h2 className="py-2 my-2 text-[#5A5476] text-4xl font-bold">
          Who We Are
        </h2>
        <button className="border rounded-3xl bg-[#FDD75C] py-2 px-10 text-[#7D688F] font-semibold">
          Learn More
        </button>
      </div>
      <div className="w-2/3 place-content-center">
        <p>
          For more than six decades, SWE has given women engineers a unique
          place and voice within the engineering industry. Our organization is
          centered around a passion for our members' success and continues to
          evolve with the challenges and opportunities reflected in today's
          exciting engineering and technology specialties. Here at CSULB SWE, it
          is our mission to stimulate women to achieve full potential in careers
          as engineers and leaders, expand the image of the engineering
          profession as a positive force in improving the quality of life, and
          demonstrate the value of diversity.
        </p>
      </div>
    </div>
  );
};

export default ShortAbout;
