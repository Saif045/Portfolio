import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/pages/about/About";
import Contact from "./Components/pages/contact/Contact";
import Home from "./Components/pages/home/Home";
import Projects from "./Components/pages/projects/Projects";
import Skills from "./Components/pages/skills/Skills";
import ScrollToTop from "./Components/utils/ScrollToTop";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/projects" element={<Projects />}></Route>

          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
