import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import "../src/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about_me" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
