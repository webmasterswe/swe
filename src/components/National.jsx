import React from "react";

const National = () => {
  return (
    <div className="bg-[#F2F2F2] ">
      <div className="flex container mx-auto my-20">
        <div className="w-1/2 content-center px-8">
          <h2 className="text-[#7D688F] text-4xl font-bold my-8">
            SWE National Membership
          </h2>
          <p className="text-base font-normal my-4">
            SWE National Membership includes the CSULB Chapter Membership. It
            must be purchased, and has many advantages over plain CSULB
            Membership. We recommended the Collegiate Membership (all years of
            university attendance and one year professional), which costs $50.
            There is also a one year membership of $20.
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
              Go to www.swe.org , scroll over the MEMBERSHIP tab and click
              “Join”
            </p>
            <ol
              style={{ listStyleType: "decimal", paddingLeft: "20px" }}
              className="leading-6 space-y-2"
            >
              <li>
                A login page appears, click “Sign Up Here” then click “New
                Customer? Click Here”
              </li>
              <li>Enter your information to create a profile</li>
              <li>Log into your account with your username and password</li>
              <li>
                Click “Start My Membership Application” and fill in all required
                boxes (*)
              </li>
              <li>
                Under the Education Information section, for University choose:
                California State University Long Beach (If you are in a graduate
                program select Yes, if not select No)
              </li>
              <li>
                Under the Work Experience section, students should choose: No
              </li>
              <li>Select your choice of membership</li>
              <li>Select and confirm CSULB as your Section Selection</li>
              <li>Proceed to Checkout! Pay fee using debit or credit card</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default National;
