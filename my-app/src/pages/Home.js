import React from "react";
import Hero from "../components/Hero";
// import Col from "./components/Col";
// import Row from "./components/Row";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Modal from ".components/Modal";
// import Projects from "./pages/Projects";
// import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
//import Wrapper from "./components/Wrapper";


function Home() {
    return (
        <Hero backgroundImage="./sunrise.jpg">
            {/* <img src={sunrise} className="App-img" alt="sunrise" /> */}
            <div>
                <p>
                    Hi! I am Sandy Smith. <br />
                    Web Developer. <br />
                    Artist.
                </p>
            </div>
                            {/* <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a> */}
        </Hero>
    );
}
export default Home;