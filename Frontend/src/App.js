import { Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";
import Therapist from "./pages/therapist";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import ChangePWd from "./pages/changePassword";
import Profile from "./pages/profile";
import Session from "./pages/session";


function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/login"  element={<Login/>} />
      <Route path="/userRegister"  element={<Register/>} />
      <Route path="/register"  element={<Register/>} />
      <Route path="/user"  element={<User/>} />
      <Route path="/therapist"  element={<Therapist/>} />
      <Route path="/contactus" element={<Contact/>}/>
      <Route path="/changepwd" element={<ChangePWd/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/session" element={<Session/>}/>
    </Routes>
    </>
  );
}

export default App;
