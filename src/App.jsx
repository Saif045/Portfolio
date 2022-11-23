import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import ScrollToTop from "./Components/utils/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
