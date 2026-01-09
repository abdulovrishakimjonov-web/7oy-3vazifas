import shock from "../assets/img/shock.png";
import booster from "../assets/img/booster.png";
import belt from "../assets/img/belt.png";

import car1 from "../assets/img/car1.png";
import car2 from "../assets/img/car2.png";
import car3 from "../assets/img/car3.png";
import car4 from "../assets/img/car4.png";
import car5 from "../assets/img/car5.png";

import gearBg from "../assets/img/gear-bg.png";

export default function NewsSection() {
  const cars = [car1, car2, car3, car4, car5];
  const carHeights = [48, 44, 40, 36, 32];

  const news = [
    {
      img: shock,
      title: "Новинки амортизаторы",
      date: "24.06.2022",
    },
    {
      img: booster,
      title: "Ожидаемое поступление на склад – вакуумный усилитель тормозов",
      date: "24.06.2022",
    },
    {
      img: belt,
      title: "Вновь на складе",
      date: "24.06.2022",
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-20 relative overflow-hidden">
      <div className="absolute right-0 top-0 opacity-10 w-[400px] h-[400px]">
        <img
          src={gearBg}
          alt="Gear background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex gap-6 mb-10 items-end justify-start">
          {cars.map((car, idx) => (
            <img
              key={idx}
              src={car}
              className={`h-[${carHeights[idx]}px]`}
              alt={`car${idx + 1}`}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-2">Новости</h2>
        <p className="text-sm text-gray-500 mb-8 whitespace-nowrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          lorem placerat molestie arcu placerat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 flex flex-col justify-between h-full"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto h-28 mb-4 object-contain"
              />
              <h3 className="font-semibold text-sm mb-2">{item.title}</h3>

              <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
                <span>{item.date}</span>
                <span className="text-[#c83c44] font-medium cursor-pointer flex items-center gap-1">
                  Подробнее <span className="text-[#c83c44] text-xl">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
