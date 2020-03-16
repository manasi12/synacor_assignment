import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import '../static/styles/productCard.css';

class ProductCard extends Component {
  render() {
    return (
      <Card className="">
        <Link to={{
          pathname: `/${this.props.selectedCategory.name}/${this.props.productDetail.id}`,
          state: {
            productDetail: this.props.productDetail
          }
        }}>
          <CardMedia
            component="img"
            alt={this.props.productDetail.name}
            height="200"
            image={require(`./../static/images/${this.props.productDetail.imageUrl}`)}
            title={this.props.productDetail.name}
            style={{ objectFit: "contain" }}
          />
          <CardContent justify="center">
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {this.props.productDetail.name}
            </Typography>
          </CardContent>
        </Link >
      </Card >
    );
  }
}
export default ProductCard;
