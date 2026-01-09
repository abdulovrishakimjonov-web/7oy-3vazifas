import React from "react";
import { FiFileText, FiPhone, FiClock, FiMapPin, FiSend } from "react-icons/fi";
import { FaVk } from "react-icons/fa";

import logo from "../assets/svg/logo.svg";
import visa from "../assets/svg/visa.svg";
import mastercard from "../assets/svg/mastercard.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b">
          <div className="transform transition-all duration-500 hover:translate-y-[-3px] hover:scale-105">
            <a
              href="https://shaxsiysayt.uz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="logo" className="h-10 mb-4" />
            </a>
            <p className="text-xs text-gray-500 mb-5">
              ПРОДАЖА ЗАПАСНЫХ ЧАСТЕЙ
              <br /> ГАЗ, ВАЗ, ГАЗель
            </p>

            <div className="space-y-3">
              <a
                href="https://shaxsiysayt.uz/catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-300"
              >
                <FiFileText className="w-4 h-4" />
                Скачать каталог
              </a>
              <a
                href="https://shaxsiysayt.uz/prices.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-300"
              >
                <FiFileText className="w-4 h-4" />
                Запросить прайс
              </a>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://vk.com/shaxsiyprofil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaVk className="w-5 h-5 cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a
                href="mailto:info@shaxsiysayt.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiSend className="w-5 h-5 cursor-pointer text-gray-600 hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          <Menu
            title="Меню"
            items={[
              "Каталог",
              "О компании",
              "Партнерам",
              "Новости",
              "Контакты",
            ]}
          />

          <Menu
            title="Запчасти"
            items={[
              "Трансмиссия",
              "Система охлаждения",
              "Электрика",
              "Система отопления",
              "Амортизаторы",
            ]}
          />

          <Menu
            title="Узлы"
            items={[
              "Сцепление и тормозная система",
              "Ролики, натяжители и приводные ремни",
              "Ремкомплекты и рулевое управление",
              "Двигатель и КПП",
            ]}
          />

          <div className="space-y-5 transform transition-all duration-500 hover:translate-y-[-2px]">
            <Contact
              icon={
                <a href="tel:+78314185857">
                  <FiPhone className="w-5 h-5 mt-1 text-gray-600" />
                </a>
              }
              text={
                <>
                  7 (831) 418-58-57 <br />7 (831) 418-58-56
                </>
              }
            />
            <Contact
              icon={<FiClock className="w-5 h-5 mt-1 text-gray-600" />}
              text={
                <>
                  8:30 – 16:30 <br />
                  сб, вс – выходной
                </>
              }
            />
            <Contact
              icon={<FiMapPin className="w-5 h-5 mt-1 text-gray-600" />}
              text={
                <>
                  г. Нижний Новгород <br />
                  Чаадаева 1У
                </>
              }
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm text-gray-500">
          <span>© 2016 – 2022 pravt. Все права защищены</span>

          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-red-500 transition-colors duration-300">
              Политика безопасности
            </span>
            <div className="flex gap-2">
              <a
                href="https://www.visa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={visa} alt="visa" className="h-6" />
              </a>
              <a
                href="https://www.mastercard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mastercard} alt="mc" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Menu({ title, items }) {
  return (
    <div className="transform transition-all duration-500 hover:translate-y-[-2px]">
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        {items.map((item, i) => (
          <li
            key={i}
            className="hover:text-red-500 cursor-pointer transition-colors duration-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Contact({ icon, text }) {
  return (
    <div className="flex gap-3 text-sm text-gray-600 transform transition-all duration-500 hover:translate-x-1">
      {icon}
      <div>{text}</div>
    </div>
  );
}
