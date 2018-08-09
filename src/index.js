import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

//import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
      
        <Footer/>
      </div>
    )

  }

}

ReactDOM.render(<App/>,document.getElementById('root'));