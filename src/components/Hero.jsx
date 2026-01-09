import React from "react";
import { NavLink } from "react-router-dom";
import heroIMG from "../assets/img/heroIMG.png";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      className="w-full  text-white rounded-lg overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="relative w-full mx-auto max-w-[1200px] px-6 py-16 sm:py-20 md:py-24 lg:py-28"
        style={{
          backgroundImage: `url(${heroIMG})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r box via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Автозапчасти
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg font-semibold leading-snug">
            для автомобилей марок
            <br /> ГАЗ, ВАЗ, КАМАЗ, ПАЗ и УАЗ
          </p>

          <NavLink
            to="/catalog"
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-md transition-transform transform hover:-translate-y-0.5"
          >
            <span>ПЕРЕЙТИ</span>
            <FiArrowRight />
          </NavLink>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-1 w-8 bg-red-600 rounded-full" />
            <div className="h-1 w-28 bg-gray-700 rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
}
