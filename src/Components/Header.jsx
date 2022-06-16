import React from "react";

export default function NavBar() {
    return (
        <header className="App-header">
        <h1 className="titulo">TITULO</h1>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Seccion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Seccion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Seccion</a>
          </li>
        </ul>
      </header>
    );
  }