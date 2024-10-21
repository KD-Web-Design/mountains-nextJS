import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold">
              Plant<span className="text-blue-700">.</span>
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Find your <span className="text-blue-700">greeny</span> stuff
                for your room
              </h1>
              <div className="w-20 h-2 bg-blue-700 my-4"></div>
              <p className="text-xl mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae maiores neque eaque ea odit placeat, tenetur illum
                distinctio nulla voluptatum a corrupti beatae tempora aperiam
                quia id aliquam possimus aut.
              </p>
              <button className="bg-blue-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                Learn More
              </button>
            </div>
          </header>
        </div>
      </div>
      <Image
        src="/images/peak-illustration.svg"
        alt=""
        className="w-full h-48 object-cover object-left sm:h-screen sm:w-4/12"
        width={300}
        height={500}
      />
    </div>
  );
}
