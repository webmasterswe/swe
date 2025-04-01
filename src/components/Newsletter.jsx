import React from "react";

const Newsletter = () => {
  return (
    <div className="flex container mx-auto my-16 h-96 place-content-center">
      <div className="place-content-center flex flex-col justify-center items-center mx-6">
        <img src="/beeheart.png" alt="Newsletter" className="w-48" />
      </div>

      {/* Text and Subscribe Button */}
      <div className="place-content-center">
        <h2 className="text-3xl font-bold text-[#5A5476]">
          Subscribe to Our Newsletter!
        </h2>
        <p className="text-[#7D688F] my-6 w-96">
          Stay in the loop with reminders and updates on all our events, so
          you’ll always know what’s going on in the SWE community.
        </p>
        <a
          href="https://csulb.campuslabs.com/engage/organization/society-of-women-engineers-swe"
          target="_blank"
          className="border rounded-3xl bg-[#FDD75C] py-2 px-10 text-[#7D688F] font-semibold "
        >
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
