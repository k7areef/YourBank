// React Router DOM:
import { Routes, Route } from "react-router-dom";
// Pages:
import AboutPage from "@pages/AboutPage";
import CareersPage from "@pages/CareersPage";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import SecurityPage from "@pages/SecurityPage";
import SignupPage from "@pages/SignupPage";
// Common Components:
import NavigraitonBar from "@components/layout/NavigationBar";
import Footer from "@components/layout/Footer";

function App() {
  return (
    <div className="App min-h-screen bg-grey-10 text-white font-light">
      {/* Navigation Bar */}
      <NavigraitonBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;