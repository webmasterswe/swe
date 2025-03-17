import React from 'react';

const Newsletter = () => {
    return (
        <div className="w-full min-h-screen bg-[#D9D9D9] flex flex-col items-center p-8">
            
            {/* Newsletter Box */}
            <div className="max-w-[800px] w-full bg-[#B2A6BC] p-6 rounded-3xl shadow-lg flex">
                
                {/* Square Image Box */}
                <div className="w-1/2 flex items-center justify-center">
                    <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center rounded-xl p-10">
                        <img 
                            src="/images/girlwithclouds.png" 
                            alt="Newsletter" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Text and Subscribe Button */}
                <div className="w-1/2 flex flex-col items-center justify-center p-14">
                    <h2 className="text-3xl font-bold text-[#5A5476]">Subscribe to Our Newsletter!</h2>
                    <p className="text-[#7D688F] mt-6">SWE Community Buzz: Insights, Events, and Opportunities!</p>
                    <a href="https://csulbswe.us19.list-manage.com/subscribe?u=73c12b372448a8a4f26e6954d&id=c13e7d3c17" className="mt-9 px-10 py-3 bg-[#FDD75C] text-[#5A5476] text-lg font-medium shadow-[8px_8px_3px_0px_rgba(0,0,0,0.25)] rounded-xl hover:bg-[#E8D366] w-fit">
                        Subscribe
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;