import React from 'react';
import Products from './components/Products';

class MercadoLibreApp extends React.Component {
    constructor() {
        super()
          this.state = {
            products: [],
        };
    }
          
    componentDidMount() {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=aromaterapia&limit=8')
        .then(response => {
          //console.log(results);
          return response.json();
        })
        .then(data => {
          console.log(data.results);
          this.setState({products: data.results})
        })
    }
    
    render() {
        return this.state.products.map(item => <Products product={item} key={item.id} />)
    }
}

export default MercadoLibreApp;