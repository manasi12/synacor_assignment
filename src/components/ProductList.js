import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import '../static/styles/productList.css';

class ProductList extends Component {
  render() {
    return (
      <Grid container justify="center" spacing={3} className="list-alignment">
        {this.props.productList.map(productData => (
          <Grid item xs={12} md={6} lg={4} key={productData.id}>
            <ProductCard productDetail={productData} selectedCategory={this.props.selectedCategory} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default ProductList;
