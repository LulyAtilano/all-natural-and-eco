import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from './components/Header';
import Footer from './components/Footer';
import MercadoLibreApp from './app';
//import Routes from './routes';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <div className="row"> <MercadoLibreApp /> </div>
        <Footer/>
      </div>
    )

  }

}

ReactDOM.render(<App/>,document.getElementById('root'));
