import React from 'react';
//http://localhost:3000/events

// Event data array
const events = [
    {
        date: "Mar",
        day: "20",
        time: "6:00 PM",
        title: "SWE Networking Event",
        description: "Join us for an evening of networking with professionals in the tech industry. Don't miss out on building connections!"
    },
    {
        date: "Apr",
        day: "10",
        time: "5:30 PM",
        title: "Tech Talk with Industry Experts",
        description: "Join us for an insightful session with leading industry experts as they share their experiences and expertise in the field."
    },
    {
        date: "May",
        day: "15",
        time: "7:00 PM",
        title: "Leadership Workshop",
        description: "A workshop focusing on building leadership skills for aspiring engineers in the STEM field."
    },
    // Add more events as needed
];

const Events = () => {
    const oval = (color) => ({
        width: '100%',
        height: '150px',
        borderRadius: '50%',        
        position: 'relative',
        top: '-75px',
        overflow: 'hidden',
        backgroundColor: color,
        clipPath: 'ellipse(100% 60% at 50% 100%)', // Cuts the top part
    });

    return (
    <div className="w-full min-h-screen bg-[#342C21] flex flex-col items-center">
        
        {/* General Body Meetings (GBMs) */}
        <div className="w-full bg-[#FDFAED] pt-10 pb-20 text-center flex flex-col items-center">
            <h1 className="text-[#000000] text-5xl mt-4">
                Our Events
            </h1>
            <h1 className="text-[#000000] text-4xl mt-28">
                General Body Meetings (GBMs)
            </h1>
            <h2 className=" text-[#000000] max-w-[1200px] text-2xl mt-16">
            Our GBMs provide opportunities to build leadership skills, network with professionals from top companies, and collaborate with like-minded peers passionate about making a difference in STEM. Whether you're a SWE member or new to the club, all undergraduates are welcome to join us in person!</h2>
        </div>
        
        <div style={oval('#FDFAED')} ></div>

        {/* Evening with Industry (EWI) */}
        <div className="w-full bg-[#342C21] text-center flex flex-col items-center">
            <h1 className="text-[#F2F2F2] text-4xl mt-4">
                Evening with Industry (EWI)
            </h1>
            <h1 className="text-[#F2F2F2] max-w-[1200px] text-2xl mt-16">
            Evening with Industry is SWE’s signature annual networking event, designed to bring together engineering students and industry representatives in a welcoming atmosphere. This event provides a unique opportunity to explore career paths, learn about industry trends, and build meaningful professional connections.
            </h1>
        </div>

        <div className='mt-20'></div>
        
        {/* Half oval under conference info */}
        <div className="relative w-full bg-[#FDFAED]">
            <div style={oval('#342C21')} />
            <div className="p-1 z-10 text-left">
            </div>
            <h1 className="text-[#000000] font-bold text-4xl text-center">
                Events
            </h1>
        </div>

        {/* Upcoming Events */}
        <div className="w-full bg-[#FDFAED] p-8">
            <div className="max-w-[1200px] mx-auto bg-[#342C21] p-6 rounded-3xl flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Map data to event boxes */}
                    {events.map((event, index) => (
                        <div key={index} className="flex bg-[#FDFAED] p-6 rounded-lg shadow-lg">
                            {/* Date Section */}
                            <div className="w-1/3 bg-[#342C21] text-white text-center py-4 flex flex-col justify-center items-center rounded-l-lg">
                                <p className="text-2xl">{event.date}</p>
                                <p className="text-xl">{event.day}</p>
                                <p className="text-lg">{event.time}</p>
                            </div>

                            {/* Event Info Section */}
                            <div className="w-2/3 flex flex-col justify-center pl-6">
                                <h3 className="text-[#342C21] text-2xl font-bold">{event.title}</h3>
                                <p className="text-[#342C21] text-lg mt-2">{event.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Events; 
