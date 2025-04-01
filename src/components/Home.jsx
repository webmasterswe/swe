import React from "react";

const Home = () => {
  return (
    <div className="relative h-[600px] bg-[rgba(200,185,213,0.55)] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/home.jpg')] bg-cover opacity-30 z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-[#7D688F] text-5xl font-bold">
          Society of Women Engineers
        </h1>
        <h2 className="text-[#7D688F] text-3xl mt-4 font-semibold">
          Aspiring. Advancing. Achieving.
        </h2>
      </div>
    </div>
  );
};

export default Home;
