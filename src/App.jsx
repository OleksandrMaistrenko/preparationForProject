import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
//import Contacts from "./components/Contacts/Contacts";
import { Routes, Route } from "react-router-dom";
import Authorisation from "./components/Authorisation/Authorisation";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Authorisation />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="*" element={<ElementNotFound />} /> */}
      </Routes>

      <Header />
    </div>
  );
}

export default App;
