import React from "react";
import officers from "./officers_data"


const Officers = () => {

  
  return (    
    <div className="flex flex-col items-center bg-[#F2F2F2]">

      <div className="text-[#7D688F] text-4xl font-bold my-8">
      Officers
      </div>

      <div className="flex flex-row flex-wrap gap-4 justify-center">

        {officers.map((officer, index) => (
          <div className="flex flex-col items-center p-3 gap-2" key={index}>
            <img src={officer.photo} className="w-40 h-35 rounded-full"/>
              <div className="bg-[#7D688F] w-auto h-auto px-3 py-2 rounded-3xl">
              <h2 className="text-base text-gray-300 font-semibold text-center uppercase">{officer.name}</h2>
              <p className="text-gray-300 text-sm text-center">{officer.title}</p>
              </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Officers;
