import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>
        <Helmet><title>Home - Quiz App</title></Helmet>
        <div id="home">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                <div className="auth-container">
                    <a href="https://codepen.io/iamgs" className="auth-buttons" id="login-button">Follow on Codepen</a>
                    <a href="https://github.com/GauravSingh9356" className="auth-buttons" id="signup-button">Follow on Github</a>
                </div>
            </section>
        </div>
    </Fragment>
);

export default Home;