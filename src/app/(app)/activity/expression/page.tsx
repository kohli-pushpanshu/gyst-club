import Image from "next/image";
import React from "react";
import { FocusCards } from "../../../../../components/ui/focus-cards";

const page = () => {
  const cards = [
    {
      src: "/record.jpg",
      title: "Record",
    },
    {
      src: "/smile.png",
      title: "Smile",
    },
    {
      src: "",
      title: "Card 3",
    },
    {
      src: "",
      title: "Card 4",
    },
    {
      src: "",
      title: "Card 5",
    },
    {
      src: "",
      title: "Card 6",
    },
  ];

  return (
    <div className="bg-white text-black font-sans w-full">

        <div className="relative z-10 flex justify-center">
          <Image
            src="/xpression-2023.png"
            alt="Top Transparent Image"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="/record.jpg"
            alt="Record"
            width={400}
            height={300}
            className="rounded-md"
          />

      </div>


      <div className="flex flex-col items-center justify-center text-center bg-yellow-50 py-10 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Students Outreach</h1>
        <p className="text-gray-700">UP`s biggest Youth Festival</p>
        <p className="text-gray-600">Attracting 6000+ students every year</p>
      </div>


      <div className="text-center py-10 text-2xl font-semibold bg-gray-100 text-black shadow-inner">
        Gallery
      </div>

      <div className="bg-white py-8">
        <FocusCards cards={cards} />
      </div>
    </div>
  );
};

export default page;
