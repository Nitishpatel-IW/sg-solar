import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Home from "./pages/homie";
import Faq from "./pages/faq";
import Foot from './components/footer/index'
import Partner from "./pages/partners";
import Floatbutton from './components/floatingbutton/index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/partner" element={<Partner/>}/>
      </Routes>
      </BrowserRouter>
      <Foot/>
      {/* <Floatbutton/> */}
      
    </div>
  );
}

export default App;

