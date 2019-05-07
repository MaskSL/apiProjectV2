import React, { Component } from "react";
import axios from 'axios';

class ItemDetails extends Component {


  //define state
  state = {
    allMovies: []
  };

  //Get data from api
   async componentDidMount() {
       const response = await 
        axios.get('http://localhost:3000/Movie/v1.0/Movie/'+this.props.match.params.id);
        let moviesArray = response.data.map(movies => {
            return{
                id:movies._id,
                genre:movies.genre,
                name:movies.name,
                year:movies.year,
                running_time:movies.running_time,
                story:movies.story,
                subtitles:movies.subtitles,
                starring:movies.starring,
                director:movies.director,
                trailer_url:movies.trailer_url,
                rating:movies.rating,
                cast:movies.cast,
                audio:movies.audio,
                format:movies.format,
                image_url:movies.image_url

            };
        });

        console.log(moviesArray);
        this.setState({ allMovies: moviesArray });

}

    render() {
        return (
            
          <div class="container">
            <h1 class="my-4">
              Page Heading
              <small>Secondary Text</small>
            </h1>

            <div class="row">
              <div class="col-md-8">
                <img
                  class="img-fluid"
                  src="http://placehold.it/750x500"
                  alt=""
                />
              </div>

              <div class="col-md-4">
                <h3 class="my-3">Project Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nam viverra euismod odio, gravida pellentesque
                  urna varius vitae. Sed dui lorem, adipiscing in
                  adipiscing et, interdum nec metus. Mauris ultricies,
                  justo eu convallis placerat, felis enim.
                </p>
                <h3 class="my-3">Project Details</h3>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Dolor Sit Amet</li>
                  <li>Consectetur</li>
                  <li>Adipiscing Elit</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }
};

export default ItemDetails;
