import React, { Component } from "react";
import { Grid, Card, Image, Icon, Rating } from "semantic-ui-react";

class ProductListView extends Component {
  render() {
    const { products, onSelectProduct } = this.props;
    return (
      <Grid columns={4}>
        {products.map((product) => {
          return (
            <Grid.Column key={product.id}>
              <Card onClick={() => onSelectProduct(product.id)}>
                <Image src={product.imgUrl} wrapped ui={false} />
                <Card.Content>
                  <Card.Header as="h1" textAlign="center">
                    {product.name}
                  </Card.Header>
                  <Card.Description>{product.description}</Card.Description>
                  <Card.Meta>
                    <Rating icon="star" defaultRating={3} maxRating={5} />
                  </Card.Meta>
                  <Card.Header as="h1" textAlign="center">
                    {product.price}원
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Icon size="large" name="cart" />
                  <Icon size="large" name="like" />
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    );
  }
}

export default ProductListView;
