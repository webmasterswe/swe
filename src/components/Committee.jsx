"use client";
import roles from "@/descriptions/committee";
import { useState } from "react";

const Committee = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="bg-[#F2F2F2] ">
      <div className="flex container mx-auto my-20">
        <div className="w-1/2 content-center px-8">
          <h2 className="text-[#7D688F] text-4xl font-bold my-8">
            SWE-ET Committees
          </h2>
          <p className="text-base font-normal my-4">
            The SWE Committee is an exciting opportunity for students who want
            to get more involved in the Society of Women Engineers (SWE) and
            gain valuable experience in event planning, leadership, and
            community engagement. As a committee member, you'll work closely
            with current SWE officers, shadowing them to learn the ins and outs
            of running a successful organization.
          </p>
          <p className="text-base font-normal my-4">
            This is a perfect stepping stone for anyone interested in running
            for an officer position in the next school year. By joining the SWE
            Committee, you’ll build hands-on experience, contribute to impactful
            events, and connect with like-minded peers who share your passion
            for advancing diversity and inclusion in engineering.
          </p>
          <button className="border rounded-3xl bg-[#FDD75C] my-2 py-2 px-10 text-[#7D688F] font-semibold">
            {" "}
            Get involved
          </button>
        </div>
        <div className="w-1/2 mx-auto my-auto px-8">
          <h2 className="text-xl font-semibold text-[#7D688F] uppercase ">
            Roles
          </h2>
          <div
            className="mt-2 border-t border-gray-300 overflow-y-auto"
            style={{ maxHeight: "600px" }}
          >
            {roles.map((role, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="w-full flex justify-between items-center py-3 text-left px-2 font-medium text-[#3c3c43]"
                  onClick={() => toggleDropdown(index)}
                >
                  {role.title}
                  <span className="text-xl">
                    {openDropdowns[index] ? "−" : "+"}
                  </span>
                </button>
                {openDropdowns[index] && role.description && (
                  <p className="px-4 pb-3 text-sm">{role.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
