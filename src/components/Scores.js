import React from "react";

function Scores(props) {
    return (
        <section className="scores">
            <span className="current">Current score: {props.currentScore}</span>
            <span className="best">Best score: {props.bestScore}</span>
        </section>
    );
}

export default Scores;