import React from "react";

function Scores(props) {
    return (
        <section className="scores">
            <span>Current score: {props.currentScore}</span>
            <span>Best score: {props.bestScore}</span>
        </section>
    );
}

export default Scores;