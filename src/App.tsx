import { Navigate, Route, Routes } from "react-router";
import { SigUpPage } from "./app/features/auth/pages/signup/SignUpPage";
import { CalendarPage } from "./app/features/calendar/pages/calendar/CalendarPage";
import { ContactsPage } from "./app/features/contacts/pages/contacts/ContactsPage";
import { DashboardPage } from "./app/features/dashboard/pages/dashboard/DashboardPage";
import { MainLayout } from "./app/shared/layouts/main-layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
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
