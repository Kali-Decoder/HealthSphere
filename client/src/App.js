import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from "react-router-dom";
import LoginUser from "./pages/LoginUser";
import Dashboard from "./pages/Dashboard";
import UpdateDetailPage from "./pages/UpdateDetailPage";
import AbhaPage from "./pages/AbhaPage";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route exact path="/" element={<RegistrationPage />}  />
        <Route exact path="/login" element={<LoginUser />}  />
        <Route exact path="/dashboard" element={<Dashboard />}  />
        <Route exact path="/edit-profile" element={<UpdateDetailPage />}  />
        <Route exact path="/get-abha" element={<AbhaPage />}  />
        
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
