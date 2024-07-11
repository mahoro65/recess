import { Route, Routes } from "react-router-dom";
import About from "./components/About/index";
import SinglePage from "./components/Blogs/SinglePost/index";
import Contact from "./components/Contact/index";
import Home from "./components/Home/index";
import Sports from "./components/Sports/index";
import Politics from "./components/Politics/index";
import Entertainment from "./components/Entertainment/index";


export default function Routers() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<SinglePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/sports" element={<Sports />} />
        <Route exact path="/Politics" element={<Politics />} />
        <Route exact path="/Entertainment" element={<Entertainment />} />
      </Routes>
    </>
  );
}
