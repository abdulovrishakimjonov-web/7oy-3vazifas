import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/svg/logo.svg";
import { FiMenu, FiX, FiPhone, FiClock, FiMapPin } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const navItems = [
    { to: "/catalog", label: "КАТАЛОГ", primary: true },
    { to: "/", label: "ГЛАВНАЯ" },
    { to: "/about", label: "О КОМПАНИИ" },
    { to: "/partners", label: "ПАРТНЕРАМ" },
    { to: "/news", label: "НОВОСТИ" },
    { to: "/contacts", label: "КОНТАКТЫ" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center h-[90px]">
          <img src={logo} alt="PRAM" className="h-16 shrink-0" />

          <div className="ml-4 text-xs leading-snug max-w-[200px] hidden sm:block">
            ПРОДАЖА ЗАПАСНЫХ ЧАСТЕЙ
            <br />
            ГАЗ, ВАЗ, ПАЗ, УАЗ, КАМАЗ
          </div>

          <div className="ml-auto flex items-center gap-8 text-xs">
            <div className="hidden lg:flex gap-2">
              <FiPhone className="text-red-600 mt-1" />
              <div>
                <div>Отдел продаж</div>
                <div className="font-semibold">7 (831) 418-58-57</div>
                <div className="font-semibold">7 (831) 418-58-56</div>
              </div>
            </div>

            <div className="hidden xl:flex gap-2">
              <FiClock className="text-red-600 mt-1" />
              <div>
                <div>Время работы</div>
                <div className="font-semibold">8:30 – 16:30</div>
                <div className="text-gray-500">сб, вс — выходной</div>
              </div>
            </div>

            <div className="hidden xl:flex gap-2">
              <FiMapPin className="text-red-600 mt-1" />
              <div>
                <div>Адрес</div>
                <div className="font-semibold">г. Нижний Новгород</div>
                <div className="font-semibold">Чаадаева 1у/1</div>
              </div>
            </div>

            <a href="tel:+78314185857" className="lg:hidden text-red-600">
              <FiPhone size={22} />
            </a>

            <div className="hidden xl:flex items-center gap-1 font-medium">
              🇷🇺 Ru
            </div>

            <button onClick={() => setOpen(true)} className="xl:hidden">
              <FiMenu size={26} />
            </button>
          </div>
        </div>

        <div className="hidden xl:flex items-center h-[50px] text-sm font-semibold">
          <nav className="mx-auto flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `
                  ${item.primary ? "px-4 py-2" : ""}
                  ${isActive ? "text-red-600" : "hover:text-red-600"}
                `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <img src={logo} className="h-12" />
          <button onClick={() => setOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  );
}
