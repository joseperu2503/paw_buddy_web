import { Route, Routes } from "react-router";
import "./App.css";
import AboutPage from "./pages/about/AboutPage";
import { HomePage } from "./pages/home/HomePage";
import { SigUpPage } from "./pages/signup/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<SigUpPage />} />
    </Routes>
  );
}

export default App;
