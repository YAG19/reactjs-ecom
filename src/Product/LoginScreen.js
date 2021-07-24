import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormConatiner";


const LoginScreen = ({location, history}) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const {email, password} = user

  const dispatch = useDispatch()

   const userLogin = useSelector( state => state.userLogin)

   const { loading , error , userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
      if(userInfo){
          history.push(redirect)
      }
  },[history, userInfo , redirect])

    const submithandler = (e) => {
        e.preventDefault();
        dispatch(login(email,password))
    }

  return (
    <FormContainer>
      <h1>Sign in </h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader /> }
      <Form onSubmit={submithandler}>
      <Form.Group controlId='email'> 
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='password'> 
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></Form.Control>
      </Form.Group>
        
        <Button type="submit" variant='primary'> Login In</Button>

      </Form>

        <Row className="py-3">
            <Col> New User <Link to={redirect ? `/register?redirect=${redirect}` : null} ></Link></Col>
        </Row>

    </FormContainer>
  );
};

export default LoginScreen;

