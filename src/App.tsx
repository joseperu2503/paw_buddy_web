import { Route, Routes } from "react-router";
import "./App.css";
import { CalendarPage } from "./app/features/calendar/pages/calendar/CalendarPage";
import { ContactsPage } from "./app/features/contacts/pages/contacts/ContactsPage";
import { DashboardPage } from "./app/features/dashboard/pages/dashboard/DashboardPage";
import { MainLayout } from "./app/shared/layouts/main-layout/MainLayout";
import AboutPage from "./pages/about/AboutPage";
import { HomePage } from "./pages/home/HomePage";
import { SigUpPage } from "./pages/signup/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<SigUpPage />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/settings" element={<CalendarPage />} />
        <Route path="/account" element={<CalendarPage />} />

      </Route>
    </Routes>
  );
}

export default App;
