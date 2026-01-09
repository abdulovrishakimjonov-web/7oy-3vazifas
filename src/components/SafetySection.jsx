import React from "react";
// images
import visa from "../assets/svg/visa.svg";
import mastercard from "../assets/svg/mastercard.svg";
import tirsan from "../assets/svg/tirsan.svg";

import badge from "../assets/svg/badge.svg";
import truck from "../assets/svg/truck.svg";
import price from "../assets/svg/price.svg";
import manager from "../assets/svg/manager.svg";

export default function SafetySection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-red-500 uppercase mb-14">
          Безопасность, комфорт, надежность!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 leading-relaxed">
            Вся продукция изготовлена в соответствии с Директивой Европейского
            парламента и Совета Европейского Союза 2007/46/EC от 5 сентября 2007
            г.
            <br />
            <br />
            Вся продукция, которая требует подтверждения безопасности
            использования на территории РФ и Таможенного союза имеет
            подтверждение соответствия требованиям техническим регламентам:{" "}
            <span className="font-bold">ТР ТС 018/2011 и ТР ТС 010/2011</span>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Варианты оплаты:</h3>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>– Оплата наличными</li>
              <li>
                – Для юридических лиц возможен безналичный расчет с НДС, для
                ближнего зарубежья без НДС
              </li>
            </ul>

            <h4 className="font-semibold mb-3">Также принимаем к оплате:</h4>

            <div className="flex items-center gap-3">
              <img src={visa} alt="visa" className="h-6" />
              <img src={mastercard} alt="mastercard" className="h-6" />
            </div>
          </div>

          <div className="rounded-xl p-6 text-white bg-gradient-to-r from-[#4c4a74] to-[#58a6a0] flex flex-col justify-between">
            <img src={tirsan} alt="tirsan" className="h-10 mb-4 w-fit" />
            <p className="text-sm leading-relaxed opacity-90">
              Так же, наша компания является официальным представителем TIRSAN
              KARDAN (Турция) на территории Нижегородской области.
              <br />
              <br />
              Продукция успешно присутствует на российском рынке свыше 9 лет.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Feature icon={badge} title="Гарантия качества" />
          <Feature icon={truck} title="Быстрая доставка" />
          <Feature icon={price} title="Конкурентные цены" />
          <Feature icon={manager} title="Персональный менеджер" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-start gap-4">
      <img src={icon} alt={title} className="w-10 h-10" />
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
    </div>
  );
}
