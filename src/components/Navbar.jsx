import React from "react";
import Link from "next/link";

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
              <Link href="/">Home</Link>
            </div>
            {/* <div className="p-3 mx-2 text-[#5A5476] ">
              <Link href="/about">About</Link>
            </div> */}
            <div className="p-3 mx-2 text-[#5A5476]">
              <Link href="/officers">Officers</Link>
            </div>
            <div className="relative group p-3 mx-2 text-[#5A5476]">
              <Link href="#" className="cursor-default">
                Membership
              </Link>
              <ul className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50">
                <li>
                  <Link
                    href="/membership/national"
                    className="block px-4 py-3 w-full hover:bg-gray-100 cursor-pointer text-left"
                  >
                    SWE National Membership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/membership/csulb"
                    className="block px-4 py-3 w-full hover:bg-gray-100 cursor-pointer text-left"
                  >
                    CSULB SWE Membership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/membership/committee"
                    className="block px-4 py-3 w-full hover:bg-gray-100 cursor-pointer text-left"
                  >
                    SWE-et Committee
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative group p-3 mx-2 text-[#5A5476]">
              <Link href="/events">Events</Link>
              <ul className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50">
                <li>
                  <Link
                    href="/events/conference"
                    className="block px-4 py-3 w-full hover:bg-gray-100 cursor-pointer text-left"
                  >
                    Conferences
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="p-3 mx-2 text-[#5A5476] ">
              <Link href="">Gallery</Link>
            </div> */}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
