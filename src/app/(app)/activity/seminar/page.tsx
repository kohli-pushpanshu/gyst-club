import Image from "next/image";
import React from "react";

const page = () => {

  const videos = [
    { id: 1, embedUrl: "https://www.youtube.com/embed/VIDEO_ID_1" },
    { id: 2, embedUrl: "https://www.youtube.com/embed/VIDEO_ID_2" },
  ];


  const finalImages = [
    { id: 1, src: "/your-final-image.jpg", alt: "Final Image 1" },
    { id: 2, src: "/your-final-image-2.jpg", alt: "Final Image 2" },
  ];

  return (
    <div className="w-full bg-white text-black font-sans space-y-16 px-4 md:px-20 py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Seminars</h2>
        <div className="grid grid-cols-1 py-8 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <iframe
              key={video.id}
              src={video.embedUrl}
              title={`Video ${video.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-lg shadow"
            />
          ))}
        </div>
      </div>

      <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
        {finalImages.map((img) => (
          <Image
            key={img.id}
            src={img.src}
            alt={img.alt}
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow"
          />
        ))}
      </div>
      </div>
      </div>
  );
};

export default page;
