import React from "react";

export default function Hero() {
  return (
    <section className="flex items-center hero">
      <div className="absolute inset-0 z-20 flex flex-col justify-center w-full text-center md:relative md:w-1/2 hero-caption">
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          The Room <br className="" />
          You've Dreaming
        </h1>
        <h2 className="px-8 my-6 text-base tracking-wide md:px-0 md:text-lg">
          Kami menyediakan furniture berkelas yang
          <br className="hidden lg:block" />
          membuat ruangan terasa homey
        </h2>
        <div>
          <a
            href="#browse-the-room"
            className="flex-none inline-block px-8 py-3 mt-4 text-black transition duration-200 bg-pink-400 rounded-full hover:bg-black hover:text-pink-400"
          >
            Explore Now
          </a>
        </div>
      </div>
      <div className="inset-0 w-full md:relative md:w-1/2">
        <div className="relative hero-image">
          <div className="inset-0 z-10 bg-black overlay opacity-35"></div>
          <div className="bottom-0 right-0 overlay md:inset-0">
            <button
              className="z-30 video hero-cta focus:outline-none modal-trigger"
              data-content='<div className="relative z-50 w-screen pb-56 md:w-88 md:pb-56">
              <div className="absolute w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3h0_v1cdUIA"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>'
            ></button>
          </div>
          <img
            src="images/content/image-section-1.png"
            alt="hero 1"
            className="absolute inset-0 object-cover object-center w-full h-full md:relative"
          />
        </div>
      </div>
    </section>
  );
}
