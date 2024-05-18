import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
//import Contacts from "./components/Contacts/Contacts";
import { BrowserRouter } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import Authorisation from "./components/Authorisation/Authorisation";
import ElementNotFound from "./components/ElementNotFound/ElementNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Authorisation />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ElementNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
