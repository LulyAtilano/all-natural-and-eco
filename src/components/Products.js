import React from "react";

import "../index.css";

class Products extends React.Component {

  render(){
    const products = this.props.product;
    return (
      <div className="card col s3 m3">
        <div className="card-image">
          <img src={products.thumbnail} alt="logo página"/>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add_shopping_cart</i></a>
        </div>
        <div className="card-content">
          <span className="card-title">{products.title}</span>
          <p> $ {products.price} </p>
        </div>
      </div>
    )
  }

}


export default Products;