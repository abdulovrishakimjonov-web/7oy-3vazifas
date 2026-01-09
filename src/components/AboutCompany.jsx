import aboutImg from "../assets/img/About.png";
import logo from "../assets/svg/logo.svg";

export default function AboutCompany() {
  return (
    <section className="mx-auto px-4 py-16 max-w-[1200px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={aboutImg}
            alt="Company warehouse"
            className="w-full h-64 sm:h-72 md:h-[360px] object-cover"
          />

          <div className="absolute top-0 left-0">
            <img
              src={logo}
              alt="PRAVT"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">О компании</h2>

          <p className="text-base text-gray-700 leading-relaxed mb-4">
            На протяжении 6 лет компания «Автозапчасть» занимается поставками
            автозапчастей ГАЗ, УАЗ, ПАЗ, ВАЗ, КамАЗ. Мы специализируемся на
            продвижении своего бренда ТМ PRAVT – сертифицированная торговая
            марка российской компании. Наша география расширяется по всей России
            и ближнему зарубежью.
          </p>

          <p className="text-base text-gray-700 leading-relaxed mb-6">
            На сегодняшний день ассортимент нашей продукции более 600 позиций. С
            каждым годом прогресс увеличения ассортимента составляет не менее
            чем на 35%. Производственные мощности партнеров компании расположены
            на территории КНР.
          </p>

          <p className="inline-flex items-center gap-2 cursor-pointer text-gray-900">
            Подробнее
            <span className="text-[#c83c44] text-2xl">→</span>
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center md:justify-start">
        <div className="w-24 h-1 bg-[#c83c44] rounded-full" />
      </div>
    </section>
  );
}
