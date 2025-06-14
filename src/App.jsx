import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from './components/product';
import "./index.css"
import ShoppingCart from './components/shopping-card';


class App extends Component {
    state = {
        items: []
    }



    addItem = (amount, name, price) => {
        let currentItem = this.state.items;

        debugger;
        let existingItem = this.state.items.find(item => item.name == name);
        if (existingItem) {
            existingItem.amount++;
        } else {
            currentItem.push({
                amount,
                name,
                price
            });
        }


        this.setState({ items: currentItem });
        console.log(this.state);

    }


    render() {
        return <React.Fragment>
            <Navbar />

            <div className='main-container'>
                <div className='product-container'>
                    <Product onAdd={() => this.addItem(1, 'Tomaten', 2.99)} image="nike-sneaker1.jpg" title="Tomaten" description="Add Nike Sneakers" />
                    <Product onAdd={() => this.addItem(1, 'Gurken', 1.99)} image="nike-sneaker2.jpg" title="Gurken" description="Add Nike Sneakers" />
                    <Product onAdd={() => this.addItem(1, 'Äpfel', 3.99)} image="nike-sneaker3.jpg" title="Äpfel" description="Add Nike Sneakers" />
                    <Product onAdd={() => this.addItem(1, 'Birnen', 4.99)} image="nike-sneaker4.jpg" title="Birnen" description="Add Nike Sneakers" />
                </div>
                <ShoppingCart items={this.state.items} ></ShoppingCart>
            </div>

        </React.Fragment>;
    }
}

export default App;