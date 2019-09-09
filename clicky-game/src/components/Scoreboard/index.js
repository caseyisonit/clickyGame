import React from "react";
import "./scoreboard.css";

function Scoreboard(props) {
    return (
        // <header className="scoreB">
        //     <nav className="nav">
        //         <div className="col-md-6 col-left"><h5>{props.title}</h5></div>
        //         <div className="col-md-3 col-right"><h6>High Score {props.topScore}</h6></div>
        //         <div className="col-md-3 col-right"><h6>Current Score: {props.score}</h6></div>
        //     </nav>
        //     <div className="row">
        //         <div className="col-md-12 col-right">
        //             <h6>Click on a famous art work, but don't click on it more than once!</h6></div>
        //     </div>
        // </header>
        <>
        <nav class="navbar navbar-dark bg-black sticky-top">
            <h5 class="navbar-brand">{props.title}</h5>
            <div id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <h6>High Score {props.topScore}</h6>
                    </li>
                    <li class="nav-item">
                        <h6 >Current Score: {props.score}</h6>
                    </li>
                </ul>
                <span class="navbar-text">
                Click on a luminary, but don't click on it more than once!
  </span>
            </div>
        </nav>
        </>
  );
}

export default Scoreboard;
