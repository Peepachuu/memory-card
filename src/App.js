import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import "./style.css";

function App() {
    function fetchDittoData() {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(res => res.json())
            .then(data => console.log(data));
    }

    React.useEffect(() => {
        fetchDittoData()
    }, []);
    
    return (
        <section>
            <Header/>
            <Cards/>
            <Footer/>
        </section>
    )
}

export default App;
