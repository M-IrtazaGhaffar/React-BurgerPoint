import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Feedback from "./components/Feedback/Feedback";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import CardDetail from "./components/CardDetail/CardDetail";

function App() {
  return (
    <>
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='*' element={<Home />} />
            <Route exact path='/menu' element={<Menu />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/feedback' element={<Feedback />} />
            <Route exact path="/cardDetail/:id" element={<CardDetail/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
