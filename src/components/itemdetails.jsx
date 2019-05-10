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
            
          <div className="container bg-dark">
            <h1 className="my-4 text-white">{this.state.name}({this.state.year})</h1>
            <h3 className="text-white">Rating {this.state.rating}/5</h3>
            <h5 className="text-white">Running Time - {this.state.running_time} Minutes | {this.state.genre}</h5>
            <div className="row">
              <div className="col-md-8">
                <img
                  className="img-fluid"
                  src={this.image_url}
                  alt=""
                />
              </div>

              <div className="col-md-4">
                <h3 className="my-3 text-white">Story</h3>
                <p className="text-white">
                {this.story}
                </p>
                <h3 className="my-3 text-white">Directed By</h3>
                <p className="text-white">
                  {this.director}
                </p>
                <h3 className="my-3 text-white">Starring</h3>
                <p className="text-white">
                {this.starring}
                </p>
                <h3 className="my-3 text-white">Cast</h3>
                <p className="text-white">
                {this.cast}
                </p>
                <button type="button" className="btn btn-block btn-primary text-white ">Add to Cart</button>
              </div>
              <hr></hr>
            </div>
            
          </div>
          
        );
      }
};

export default ItemDetails;
