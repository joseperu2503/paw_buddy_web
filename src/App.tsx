import { Route, Routes } from "react-router";
import "./App.css";
import { DashboardPage } from "./app/features/dashboard/pages/dashboard/DashboardPage";
import AboutPage from "./pages/about/AboutPage";
import { HomePage } from "./pages/home/HomePage";
import { SigUpPage } from "./pages/signup/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<SigUpPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
