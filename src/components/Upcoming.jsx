import events from "@/descriptions/events";

const Upcoming = () => {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return (
    <div>
      <div className="w-full min-h-screen p-8 bg-[#b2a6bb]">
        <h1 className="py-4 my-6 text-[#FDFAED] text-4xl font-bold text-center">
          Upcoming Events
        </h1>
        <div className="max-w-[1200px] h-[625px] mx-auto bg-[#f2f2f2] p-6 rounded-3xl justify-center my-6 overflow-y-auto scrollbar-hide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Map data to event boxes */}
            {sortedEvents.length > 0 ? (
              sortedEvents.map((event, index) => {
                const eventDate = new Date(event.date);
                const month = eventDate.toLocaleString("default", {
                  month: "short",
                });
                const day = eventDate.getDate();
                const time = eventDate.toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                });
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md flex p-4  break-inside-avoid"
                  >
                    {/* Date Section */}
                    <div className="w-1/3 bg-[#f2f2f2] text-[#7D688F] text-center py-2 flex flex-col justify-center items-center rounded-l-lg font-semibold">
                      <p className="text-xl">{month}</p>
                      <p className="text-xl font-bold ">{day}</p>
                      <p className="text-base">{time}</p>
                    </div>

                    {/* Event Info Section */}
                    <div className="w-2/3 flex flex-col justify-center pl-6 py-4">
                      <h3 className="text-[#5A5476] text-lg font-bold">
                        {event.title}
                      </h3>
                      <p className="text-[#342C21] text-base mt-2">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className=" text-xl text-[#342C21] mt-4">No upcoming events</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
