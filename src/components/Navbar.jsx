import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="container mx-auto  py-4">
        <div className="flex justify-between ">
          <div className="w-1/4">
            <img src="/SWE_LOGO_CSULB.png" alt="" className="w-32" />
          </div>
          <div className="flex w-3/5 place-items-center content-center">
            <div className="p-3 mx-2 text-[#5A5476] ">
              <a href="/">Home</a>
            </div>
            <div className="p-3 mx-2 text-[#5A5476] ">
              <a href="/about">About</a>
            </div>
            <div className="p-3 mx-2 text-[#5A5476]">
              <a href="/officers">Officers</a>
            </div>
            <div className="p-3 mx-2 text-[#5A5476] ">
              <a href="">Membership</a>
              <ul className="hidden">
                <li>SWE National Membership</li>
                <li>CSULB SWE Membership</li>
                <li>SWE-et Committee</li>
              </ul>
            </div>
            <div className="p-3 mx-2 text-[#5A5476]">
              <a href="">Events</a>
            </div>
            <div className="p-3 mx-2 text-[#5A5476] ">
              <a href="">Gallery</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
