import React, { Component } from "react";
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router";
import axios from "axios";
import '../static/styles/details.css';
import Container from '@material-ui/core/Container';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: null
    }
  }

  componentDidMount() {
    if (!(this.props.location.state && this.props.location.state.productDetail)) {
      axios.get(`http://localhost:3000/${this.props.match.params.products}`)
        .then(res => {
          const productList = res.data;
          let product = productList.filter(element => element.id === parseInt(this.props.match.params.id));
          this.setState({ productDetail: product[0] });
        });
    } else {
      this.setState({ productDetail: this.props.location.state.productDetail });
    }
  }

  render() {
    return (
      <>
        <Header heading="Product Details Page" />
        <Container>
          <Grid container justify="center" spacing={3} className="details-container">
            <Grid item align="center" xs={12} md={6} lg={4}>
              {this.state.productDetail && <img src={require(`./../static/images/${this.state.productDetail.imageUrl}`)}
                alt={this.state.productDetail.name}
                className="product-img" />
              }
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Typography gutterBottom variant="h3">
                {this.props.match.params.products}
              </Typography>
              {this.state.productDetail && <Typography gutterBottom variant="h5">
                {this.state.productDetail.name}
              </Typography>}
              {this.state.productDetail && <Typography gutterBottom variant="h5">
                {this.state.productDetail.description}
              </Typography>}
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withRouter(Details);
