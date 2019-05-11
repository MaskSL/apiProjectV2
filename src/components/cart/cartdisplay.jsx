import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Cart = props => (
    <tr>
        <td>{props.cart.itemId}</td>
        <td>{props.cart.quantity}</td>
        <td>
            <Link to={"/deleteItem/"+props.cart.itemId}>Delete</Link>
        </td>
    </tr>
)

class CartDisplay extends Component{

    constructor(props) {
        super(props);
        this.state = {carts: []};
    }

    componentDidMount() {
        axios.get('localhost:3000/Movie/v1.0/cart/getAllcart')
            .then(response => {
                this.setState({ carts: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    cartList() {
        return this.state.carts.map(function(currentCart, i){
            return <Cart cart={currentCart} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.cartList() }
                    </tbody>
                </table>
            </div>
        )
    }


        
    

}

export default CartDisplay;