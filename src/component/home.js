import React, { Component } from "react";

function Home() {
    return (
        <div id="home">
            <div id="home-content">
                <h1>
                    Welcome
                    <br />
                    to
                    <br />
                    <span>OPEN HACK</span>
                </h1>
                <h2>Coming soon</h2>
                <div id="timer">
                    <div id="day" className="time"></div>
                    <div id="hour" className="time"></div>
                    <div id="minute" className="time"></div>
                    <div id="second" className="time"></div>
                </div>
            </div>
            {/* <div id="particles-js"></div>
            <script type="text/javascript" src="../js/particles.js"></script>
            <script type="text/javascript" src="../js/app.js"></script> */}
        </div>
    );
}

export default Home;
