import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/pages/about/About";
import Contact from "./Components/pages/contact/Contact";
import Home from "./Components/pages/home/Home";
import Projects from "./Components/pages/projects/Projects";
import Skills from "./Components/pages/skills/Skills";
import ScrollToTop from "./Components/utils/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/projects" element={<Projects />}></Route>

          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
