import React from "react";

import "../index.css";

class Header extends React.Component {
  render() {
    return (
        <header class="nav-extended">
          <nav class="nav-wrappe cyan darken-4">
            <a href="#" class="brand-logo"> <i class="material-icons purple-text text-lighten-3">spa</i> All Natural & Eco 
            <i class="material-icons right purple-text text-lighten-3">spa</i></a>
            <a data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="#"> Product </a></li>
              <li><a href="#"> Articles </a></li>
            </ul>
          </nav>
          <ul class="sidenav" id="mobile-demo">
          <li><a href="#"> Product </a></li>
          <li><a href="#"> Articles </a></li>
        </ul>
        </header>
    )
  }
};


export default Header;