import React from "react";

import "../index.css";

class Header extends React.Component {
  render() {
    return (
      <header class="nav-extended cyan darken-4 row">
        <div class="valign-wrapper col s6 white-text">
          <i class="material-icons purple-text text-lighten-3">spa</i>
          <a class="white-text"> All Natural & Eco </a>
          <i class="material-icons purple-text text-lighten-3">spa</i>
        </div>
        <div class="valign-wrapper col s6">
          <a class="white-text dropdown-trigger btn" data-target="dropdown1"> Products </a>
          <a class="white-text dropdown-trigger btn" data-target="dropdown1"> Articles </a>
        </div>
      </header>
    )
  }
};


export default Header;