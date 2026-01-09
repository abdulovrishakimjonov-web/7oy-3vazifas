import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog/Catalog";
import About from "./pages/About";
import Partners from "./pages/Partners";
import News from "./pages/News";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="about" element={<About />} />
        <Route path="partners" element={<Partners />} />
        <Route path="news" element={<News />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
