import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

class App extends React.Component {
  constructor(props) {
    this.state = {
      products: [],
    };
  }
  
  componentWillMount(){
    fetch('https://api.mercadolibre.com/categories/MLM146238')
    .then(response => response.json())
    .then(products => {

      products.results.forEach(product => {
        let data = {
          category: product.children_categories.name,
          items: product.children_categories.total_items_in_this_category
        }
        this.setState({ products: this.state.products.concat([data]) })
      })
    })
  }

  render() {
    console.log( this.state.products.length)
    if (this.state.products.length > 0 ) {
      return (
        <div>
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
          </header>
          <ul class="sidenav" id="mobile-demo">
            <li><a href="#"> Product </a></li>
            <li><a href="#"> Articles </a></li>
          </ul>
        
          <main> 
            <div> 
              { this.state.products.map(product => <section> items={product.name} category={product.category} </section>) }
            </div>
          </main>
          
          <footer>
            <div class="page-footer cyan darken-4">
              <div class="container">
              © 2014 Copyright Text
              <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
              </div>
            </div>
          </footer>
      </div>
    )
  } 
  <p> Cargando productos....</p>
}

//ReactDOM.render(<App/>, document.getElementById("root"));
export default App;