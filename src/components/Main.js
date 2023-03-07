import React, {useState} from "react";
import Cards from "./Cards";
import Scores from "./Scores";

function Main() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <section className="main">
            <Cards setCurrentScore={setCurrentScore} setBestScore={setBestScore}/>
            <Scores currentScore={currentScore} bestScore={bestScore}/>
        </section>
    )
}

export default Main;