import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Home from "./pages/Home/Home";
import Faq from "./pages/FAQ/Faq";
import Navbar from './components/navbar/index'
import Foot from './components/footer/index'
import Partner from "./pages/Partner/Partner";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/partner" element={<Partner/>}/>
      </Routes>
      </BrowserRouter>
      <Foot/>
    </div>
  );
}

export default App;

