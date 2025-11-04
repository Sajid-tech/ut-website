import React, { useState } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1700004060514-7aec5a9f7f73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    text: ["SURRENDER TO", "THE VOID"],
  },
  {
    img: "https://images.unsplash.com/photo-1613744358026-dd879eba3a8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869",
    text: ["BETWEEN SHADOW", "AND LIGHT"],
  },
  {
    img: "https://images.unsplash.com/photo-1761301356020-9444536867b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    text: ["SILENCE SPEAKS", "THROUGH FORM"],
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1747763107619-ee0f6b78d10f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    text: ["ESSENCE BEYOND", "PERCEPTION"],
  }
 
 
];

export default function SlideComponent() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
       
            <div className="absolute bottom-8 left-8 text-white">
              <div className="flex flex-col gap-2">
                {slide.text.map((t, j) => (
                  <span key={j} className="block text-2xl md:text-3xl lg:text-4xl font-light tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-4 cursor-pointer text-xl z-10 hover:bg-opacity-70 transition-all"
        onClick={prevSlide}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-4 cursor-pointer text-xl z-10 hover:bg-opacity-70 transition-all"
        onClick={nextSlide}
      >
        →
      </button>


      <div className="absolute bottom-8 right-8 text-white text-lg z-10">
        0{current + 1} / 0{slides.length}
      </div>
    </div>
  );
}