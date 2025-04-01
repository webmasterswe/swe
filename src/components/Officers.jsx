import React from "react";
import officers from "@/descriptions/officers";

const Officers = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="text-[#7D688F] text-4xl font-bold my-12 text-center">
        Meet the Board!
      </div>

      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {officers.map((officer, index) => (
          <div className="flex flex-col items-center p-3 gap-2" key={index}>
            <img src={officer.photo} className="w-40 h-35 rounded-full" />
            <div className="border rounded-3xl bg-[#7D688F] opacity-55 py-2 px-6 text-white my-4">
              <h2 className="text-base  font-semibold text-center uppercase">
                {officer.name}
              </h2>
              <p className=" text-sm text-center">{officer.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Officers;
