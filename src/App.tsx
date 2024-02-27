import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Home from "./pages/Home/Home";
import Faq from "./pages/FAQ/Faq";
import Navbar from './components/navbar/index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

