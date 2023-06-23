import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { freelanceData, personalData } from "./assets/data";
import Header from "./Components/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
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

          <Route
            path="/personal-projects"
            element={<Projects data={personalData} />}></Route>
          <Route
            path="/freelance-projects"
            element={<Projects data={freelanceData} />}></Route>

          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
