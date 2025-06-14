import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from './components/product';
import "./index.css"


class App extends Component {
    state = {}
    render() {
        return <React.Fragment>
            <Navbar />
            <div className='product-container'>
                <Product image="nike-sneaker1.jpg" title="Tomaten" description="Add Nike Sneakers" />
                <Product image="nike-sneaker2.jpg" title="Gurken" description="Add Nike Sneakers" />
                <Product image="nike-sneaker3.jpg" title="Äpfel" description="Add Nike Sneakers" />
                <Product image="nike-sneaker4.jpg" title="Birnen" description="Add Nike Sneakers" />
            </div>
        </React.Fragment>;
    }
}

export default App;