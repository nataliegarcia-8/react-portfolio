import React from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Body from "./components/body";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <div data-spy="scroll" data-target="#pb-navbar" data-offset="200">
          
                <Nav />

                <Home backgroundImage="../public/images/pexels-john-petalcurin-2115257.jpg"></Home>
                <Portfolio />
                <About />
                <Contact />

                <Footer />

        </div>
    )
};

export default App;