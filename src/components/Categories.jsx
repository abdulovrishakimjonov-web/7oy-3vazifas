import React from "react";
import { FiArrowRight } from "react-icons/fi";

import engineImg from "../assets/img/engine.png";
import fuelSvg from "../assets/svg/fuel.svg";
import coolingSvg from "../assets/svg/cooling.svg";
import clutchSvg from "../assets/svg/clutch.svg";
import gearboxSvg from "../assets/svg/gearbox.svg";
import cardanSvg from "../assets/svg/cardan.svg";
import axleSvg from "../assets/svg/axle.svg";
import suspensionSvg from "../assets/svg/suspension.svg";
import wheelsSvg from "../assets/svg/wheels.svg";
import brakesSvg from "../assets/svg/brakes.svg";
import steeringSvg from "../assets/svg/steering.svg";
import electricSvg from "../assets/svg/electric.svg";
import heatingSvg from "../assets/svg/heating.svg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Двигатель",
      items: ["Картеры масляные", "Крышки клапанов", "Насосы масляные"],
      showLink: true,
      color: "border-orange-500",
      bgColor: "bg-gray-50",
      image: engineImg,
    },
    {
      id: 2,
      title: "Система питания",
      color: "border-red-500",
      bgColor: "bg-gray-50",
      image: fuelSvg,
    },
    {
      id: 3,
      title: "Система охлаждения",
      color: "border-red-400",
      bgColor: "bg-gray-50",
      image: coolingSvg,
    },
    {
      id: 4,
      title: "Сцепление",
      color: "border-green-500",
      bgColor: "bg-gray-50",
      image: clutchSvg,
    },
    {
      id: 5,
      title: "Коробка передач",
      color: "border-green-600",
      bgColor: "bg-gray-50",
      image: gearboxSvg,
    },
    {
      id: 6,
      title: "Карданный вал",
      color: "border-green-700",
      bgColor: "bg-gray-50",
      image: cardanSvg,
    },
    {
      id: 7,
      title: "Мост передний\nи задний",
      color: "border-red-500",
      bgColor: "bg-gray-50",
      image: axleSvg,
    },
    {
      id: 8,
      title: "Подвеска",
      color: "border-red-600",
      bgColor: "bg-gray-50",
      image: suspensionSvg,
    },
    {
      id: 9,
      title: "Колеса и ступицы",
      color: "border-red-700",
      bgColor: "bg-gray-50",
      image: heatingSvg,
    },
    {
      id: 10,
      title: "Тормоза",
      color: "border-blue-400",
      bgColor: "bg-gray-50",
      image: electricSvg,
    },
    {
      id: 11,
      title: "Рулевое\nуправление",
      color: "border-cyan-400",
      bgColor: "bg-gray-50",
      image: steeringSvg,
    },
    {
      id: 12,
      title: "Электро-\nоборудование",
      color: "border-blue-500",
      bgColor: "bg-gray-50",
      image: brakesSvg,
    },
    {
      id: 13,
      title: "Отопление\nи вентиляция",
      color: "border-blue-700",
      bgColor: "bg-gray-50",
      image: wheelsSvg,
      isBottom: true,
    },
  ];

  const topCategories = categories.filter((c) => !c.isBottom);
  const bottomCategory = categories.find((c) => c.isBottom);

  return (
    <div className="w-full bg-white py-8 sm:py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
          Продажа запасных частей для авто
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {topCategories.map((category) => (
            <div
              key={category.id}
              className={`bg-white rounded-lg overflow-hidden border-l-[6px] ${category.color} cursor-pointer hover:shadow-lg transition-shadow`}
            >
              <div
                className={`${category.bgColor} p-4 sm:p-6 h-[220px] sm:h-[260px] relative`}
              >
                <div className="z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 whitespace-pre-line">
                    {category.title}
                  </h3>

                  {category.items && (
                    <ul className="space-y-1 mb-3">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-gray-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {category.showLink && (
                    <button className="flex items-center text-red-600 font-semibold text-sm">
                      Перейти
                      <FiArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="absolute right-2 bottom-2 sm:right-4 sm:bottom-4 opacity-100">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 sm:gap-6">
          <div
            className={`bg-white rounded-lg overflow-hidden border-l-[6px] ${bottomCategory.color}`}
          >
            <div className="bg-gray-50 p-4 sm:p-5 h-[160px] sm:h-[180px] relative flex flex-col justify-between">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 whitespace-pre-line leading-tight">
                {bottomCategory.title}
              </h3>

              <img
                src={bottomCategory.image}
                alt={bottomCategory.title}
                className="w-20 sm:w-24 self-end object-contain"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-red-600 text-white p-5 sm:p-8 h-[160px] sm:h-[180px] flex flex-col justify-between">
         

            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                Каталог запасных частей
              </h2>

              <button className="flex items-center gap-2 font-semibold text-sm sm:text-base hover:underline">
                Перейти
                <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
