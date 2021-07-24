import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllProduct from "./Product/AllProduct";
import ProductScreen from "./Product/ProductScreen";
import Cart from "./Product/Cart"
import LoginScreen from "./Product/LoginScreen";


function App() {
  return (
    <React.Fragment>
    <Router>

      <Header />
      <main>
        <Container>
        <Route path='/login'  component={LoginScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/" component={AllProduct}  exact />
        </Container>
      </main>

      <Footer />
    </Router>
    </React.Fragment>
  );
}

export default App;
