import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RegisterNgo from "./Pages/RegisterNgo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Login";
import LoginUser from "./Pages/LoginUser";
import Maps from "./Pages/logged-in-routes/Maps";
import PrivateRouter from "./Components/PrivateRouter";
import Applicationform from "./Pages/logged-in-routes/Applicationform";
import Verified from "./Pages/Verified";
import About from "./Pages/About";
import RegisterUser from "./Pages/RegisterUser";
import Hello from "./Pages/Hello";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/hell" element={<Hello />} />
        <Route path="/" element={<Home />} />
        <Route path="/registerNgo" element={<RegisterNgo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userLogin" element={<LoginUser />} />
        <Route path="/userRegister" element={<RegisterUser />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/sign" element={<SignAndLog />} />
        <Route path="/maps" element={<Maps />} /> */}
        <Route path="/verification" element={<Verified />} />
        <Route path="/ngo" element={<PrivateRouter />}>
          <Route path="application" element={<Applicationform />} />
        </Route>
        <Route path="/event" element={<PrivateRouter />}>
          <Route path="maps" element={<Maps />} />
        </Route>
        <Route path="/event/maps" element={<Maps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
