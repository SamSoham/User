import { Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";
import Therapist from "./pages/therapist";
import Contact from "./pages/contact";
import { Chart } from "./components/chart";


function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/user"  element={<User/>} />
      <Route path="/therapist"  element={<Therapist/>} />
      <Route path="/contactus" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
