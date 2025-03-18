import gallery from "@/descriptions/gallery";

const Gallery = () => {
  return (
    <div className="bg-[#FEFFF6]">
      <div className="min-h-screen py-16">
        <h2 className="text-[#7D688F] text-4xl font-bold my-8 mx-20">
          Gallery
        </h2>

        <div className="w-full h-1/2 flex overflow-x-auto my-auto scrollbar-hide">
          {gallery.map((photo, index) => (
            <div
              key={index}
              className="w-2/5 flex-shrink-0 border-neutral-600 px-10"
            >
              <h3 className="font-base py-2">{photo.date}</h3>
              <img src={photo.photo} />
              <h3 className="font-medium py-2">{photo.caption}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
