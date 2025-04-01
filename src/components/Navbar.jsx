import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto my-2 py-2 ">
        <div className="flex justify-between ">
          <div className="w-1/4">
            <img src="/SWE_LOGO_CSULB.png" alt="" className="w-32" />
          </div>
          <div className="flex w-3/5 place-items-center content-center">
            <div className="p-3 mx-2">
              <a href="/">Home</a>
            </div>
            <div className="p-3 mx-2">
              <a href="/about">About</a>
            </div>
            <div className="p-3 mx-2">
              <a href="/">Officers</a>
            </div>
            <div className="p-3 mx-2">
              <a href="">Membership</a>
              <ul className="hidden">
                <li>SWE National Membership</li>
                <li>CSULB SWE Membership</li>
                <li>SWE-et Committee</li>
              </ul>
            </div>
            <div className="p-3 mx-2">
              <a href="">Events</a>
            </div>
            <div className="p-3 mx-2">
              <a href="">Gallery</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
