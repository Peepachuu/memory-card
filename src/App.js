import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./style.css";

function App() {
    
    return (
        <section className="content">
            <Header/>
            <Main/>
            <Footer/>
        </section>
    )
}

export default App;
