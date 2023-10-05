import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from "react-router-dom";
import LoginUser from "./pages/LoginUser";
import Dashboard from "./pages/Dashboard";
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
      </Routes>
      
    </>
  );
}

export default App;
