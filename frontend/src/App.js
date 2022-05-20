import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { OTPVerification } from "./components/OTPVerification";
import { RegistrationForm } from "./components/RegistrationForm";
import { DataProvider } from "./context/DataContext";
import { DataTable } from "./components/DataTable";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <DataProvider>
      <div className="App bg-orange-200">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="otp" element={<OTPVerification />}>
              <Route path=":id" element={<OTPVerification />} />
            </Route>
            {/* <Route path="*" element={<NoPage />} /> */}
            <Route path="dashboard" element={<DataTable />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
