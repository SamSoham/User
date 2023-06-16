import { Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";
import Therapist from "./pages/therapist";
function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/user"  element={<User/>} />
      <Route path="/therapist"  element={<Therapist/>} />
    </Routes>
    </>
  );
}

export default App;
