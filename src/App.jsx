import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import ScrollToTop from "./Components/utils/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
      

        <Routes>
          <Route path="/" element={<Home />}></Route>
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
