import React, { Component } from "react";
import axios from 'axios';

//Displays item Details based on specific ID

class ItemDetails extends Component {



constructor(props) {
  super(props);

  this.state = {
      name: '',
      id:'',
      genre:'',
      name:'',
      year:'',
      running_time:'',
      story:'',
      subtitles:'',
      starring:'',
      director:'',
      trailer_url:'',
      rating:null,
      cast:'',
      audio:'',
      format:'',
      image_url:''
  }
}

componentDidMount() {
  axios.get('http://localhost:3000/Movie/v1.0/Movie/'+this.props.match.params.movieId)
      .then(response => {
          this.setState({
                id:response.data._id,
                genre:response.data.genre,
                name:response.data.name,
                year:response.data.year,
                running_time:response.data.running_time,
                story:response.data.story,
                subtitles:response.data.subtitles,
                starring:response.data.starring,
                director:response.data.director,
                trailer_url:response.data.trailer_url,
                rating:response.data.rating,
                cast:response.data.cast,
                audio:response.data.audio,
                format:response.data.format,
                image_url:response.data.image_url

          })   
      })
      .catch(function (error) {
          console.log(error);
      })
}

    render() {
        return (
            
          <div className="container">
            <h1 className="my-4">{this.state.name}({this.state.year})</h1>
            <h3>Rating {this.state.rating}/5</h3>
            <h5>Running Time - {this.state.running_time} Minutes | {this.state.genre}</h5>
            <div className="row">
              <div className="col-md-8">
                <img
                  className="img-fluid"
                  src={this.state.image_url}
                  alt=""
                />
              </div>

              <div className="col-md-4">
                <h3 className="my-3">Story</h3>
                <p>
                  {this.state.story}
                </p>
                <h3 className="my-3">Directed By</h3>
                <p>
                  {this.state.director}
                </p>
                <h3 className="my-3">Starring</h3>
                <p>
                  {this.state.starring}
                </p>
                <h3 className="my-3">Cast</h3>
                <p>
                  {this.state.cast}
                </p>
                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        );
      }
};

export default ItemDetails;