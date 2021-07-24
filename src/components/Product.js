import React from 'react'
import {  Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'


const Product = ({product}) => {


    const {brand,additionalInfo,searchImage,price,discount,rating,ratingCount,_id} = product

    return (

        <React.Fragment>
        <Card border="dark" bg="primary" text="white" className="my-3 rounded" >
        <Link to={`/product/${_id}`} >
        <Card.Img variant="top" src={searchImage} />
        </Link>
        <Card.Body>
          <Card.Title as="div"><strong> {brand} </strong> </Card.Title> 
          <Card.Text as='div'>
          {additionalInfo}
          <div className="my-3">
              <Rating value={rating} text={ratingCount} color='red'/>
          </div>
          </Card.Text>
          <Card.Text as="h3" >
        RS {price} <small style={{textDecoration:"line-through"}}>{discount}</small>
        </Card.Text>
        </Card.Body>
        
      </Card>
      </React.Fragment>
    
    )
}

export default Product
