import React, { Component } from "react";
import { Link,Router,Route  } from "react-router-dom";



class ItemCard extends Component {


  
  
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
              <p className="card-text">{this.props.movies.year}</p>
              <p className="card-text">{this.props.movies.story}</p>
              <ul className="list-unstyled mt-3 mb-4">
                <li>{this.props.movies.genere}</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary" ><Link className="nav-link" to={"/Movie/"+this.props.movies.id} >View Details</Link></button>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">Add to Cart</button>
            </div>
          </div>

        </div>
      </div>

    );
  }


}

export default ItemCard;

