import React from "react";

const CSULB = () => {
  return (
    <div className="bg-[#F2F2F2] ">
      <div className="flex container mx-auto my-20">
        <div className="w-1/2 content-center px-8">
          <h2 className="text-[#7D688F] text-4xl font-bold my-8">
            CSULB Chapter Membership
          </h2>
          <p className="text-base font-normal my-4">
            CSULB SWE Membership is free. For CSULB SWE Membership, make sure
            you sign up on Beach Sync to be added in our mailing list.
          </p>
        </div>
        <div className="w-1/2 mx-auto my-auto px-8">
          <h2 className="text-xl font-semibold text-[#7D688F] uppercase ">
            Follow the steps below to join:
          </h2>
          <div
            className="mt-2 border-t border-gray-300 overflow-y-auto"
            style={{ maxHeight: "600px" }}
          >
            <p className="text-base font-normal my-4">
              Go to sso.csulb.edu, the CSULB Single Sign On
            </p>
            <ol
              style={{ listStyleType: "decimal", paddingLeft: "20px" }}
              className="leading-6 space-y-2"
            >
              <li>A login page for CSULB appears</li>
              <li>Enter your student email and password</li>
              <li>Click BeachSync</li>
              <li>In the search bar of the Beach Sync site, search ‘SWE’</li>
              <li>Click Society of Women Engineers (SWE)</li>
              <li>Click the ‘Join Now’ button</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSULB;
