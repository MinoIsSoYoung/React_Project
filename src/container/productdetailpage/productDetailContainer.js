import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ProductDetail from "../../view/ProductDetailView";

@inject("ProductStore")
@observer
class ProductDetailContainer extends Component {
  onAddProductInCart = (product, count) => {
    this.props.ProductStore.addProductInCart(product, count);
    this.props.ProductStore.switchItem("cart");
  };
  render() {
    const { selectedProduct } = this.props.ProductStore;

    return (
      <ProductDetail
        product={selectedProduct}
        onAddProductInCart={this.onAddProductInCart}
      />
    );
  }
}

export default ProductDetailContainer;
