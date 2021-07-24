// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";


const ProductScreen = ({ history, match }) => {
  // eslint-disable-next-line 
  const [qty , setQty] = useState(1)
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error , product} = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
    console.log(match.params.id)
  },[dispatch,match])


  const addToCartHandler = () => {
      history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
  // eslint-disable-next-line
  // const product = data.find((p) => p.productId == match.params.productId);
  return (
    <React.Fragment>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message> ) : (
      
      <Row>
        <Col md={6}>
          <Image src={product.searchImage} alt={product.productName} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.product}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={product.ratingCount}
                color="red"
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>Info: {product.additionalInfo}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>Price: {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    {/* {product.inventoryInfo((p) => p.available === true)
                      ? "In Stock"
                      : "Out of Stock"} */}
                  </Col>
                </Row>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Button className="btn-block" type="button" onClick={addToCartHandler} >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      )}
    </React.Fragment>
  );
};

export default ProductScreen;
