import React, { Component } from "react";
import axios from 'axios';
import CategoryDropdown from '../components/CategoryDropdown';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Container from '@material-ui/core/Container';
import '../static/styles/listing.css';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      productList: [],
      selectedCategory: undefined
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/categories')
      .then(res => {
        const categoryList = res.data;
        this.setState({
          categoryList,
          selectedCategory: categoryList[0]
        });
        this.fetchProductList(this.state.selectedCategory);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCategory && this.state.selectedCategory && JSON.stringify(Object.entries(prevState.selectedCategory)) !== JSON.stringify(Object.entries(this.state.selectedCategory))) {
      this.fetchProductList(this.state.selectedCategory);
    }
  }
  fetchCategryInformation(id) {
    var categoryInfo = this.state.categoryList.filter(element => element.id === id);

    return categoryInfo;
  }
  fetchProductList(category) {
    axios.get(`http://localhost:3000/${category.name}`)
      .then(res => {
        const productList = res.data;
        this.setState({
          productList
        });
      });
  }
  setSelectedCategory(selectedCategory) {
    this.setState({ selectedCategory });
  }
  render() {
    return (
      <>
        <Header heading="Product Listing Page" />
        <Container>
          <CategoryDropdown categoryList={this.state.categoryList} setSelectedCategory={this.setSelectedCategory.bind(this)} />
          <ProductList productList={this.state.productList} selectedCategory={this.state.selectedCategory} />
        </Container>
      </>
    );
  }
}
export default Listing;
