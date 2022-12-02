import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Topo = () => (
    <header>
        <div className="limitar-secao">

            <img src="assets/logo.png" />
            <nav className="nav-topo">
                <Link className="link" to='/'> Home </Link>
                <Link className="link" to='/sabores'> Sabores </Link>
                <Link className="link" to='/sobre'> Sobre </Link>
            </nav>
        </div>
    </header>
);

export default Topo;