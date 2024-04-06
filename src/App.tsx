import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.scss';
import Home from "./pages/home";
import Faq from "./pages/faq";
import Foot from './components/footer';
import Partner from "./pages/partners";
import Floatbutton from './components/floatingbutton';
import API from './services';
import Signup from './components/signup';
import Login from './components/login';
import Localstorage from "./practice/localstorage";
import Sessionstorage from "./practice/sessionstorage";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route element={
            <PrivateRoute> */}
          <Route path="/home" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/partner" element={<Partner />} />
          {/* </PrivateRoute>
          } /> */}
        </Routes>
      </BrowserRouter>
      <Foot />
      <Floatbutton />
      {/* <API/> Testing*/}
      {/* <Localstorage/>
      <br/>
      <Sessionstorage/> */}
    </div>
  );
}
export default App;

