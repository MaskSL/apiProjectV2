import React, { Component } from "react";
import { Link  } from "react-router-dom";
import axios from "axios";



class ItemCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itemId : '',
      username : '',
      quantity : null,
      date : null
    }
}
  
  
  /* The Card containing the movie details which is displayed in home */
  render() {
    return (
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{this.props.movies.name}</h4>
            </div>
            <div className="card-body">
            <img src={this.props.movies.image_url} className="rounded"/>
              <p className="card-text" alt="Image">{this.props.movies.year}</p>
              <p className="card-text"></p>
              <ul className="list-unstyled mt-3 mb-4">
                <li>{this.props.movies.genere}</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary" ><Link className="nav-link" to={"/Movie/"+this.props.movies.id} >View Details</Link></button>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary" onClick={() => this.addToCart()}>Add to Cart</button>
            </div>
          </div>

        </div>
      </div>

    );
  }

  addToCart(){

    const moviesNew = {
      itemId : this.props.movies.id,
      username : "User",
      quantity : 1,
      date : Date.now
    }

    axios.post('localhost:3000/Movie/v1.0/cart/addcart',moviesNew)
    .then(res=> console.log(res));

  };


}

export default ItemCard;

