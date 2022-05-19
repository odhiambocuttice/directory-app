import "./App.css";
import { OTPVerification } from "./components/OTPVerification";
import { RegistrationForm } from "./components/RegistrationForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="App bg-orange-200">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="otp" element={<OTPVerification />}>
              <Route path=":otp" element={<OTPVerification />} />
            </Route>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
