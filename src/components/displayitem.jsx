import React, { Component } from "react";
import ItemCard from "./itemcard";
import axios from 'axios';
const apiGetData = 'http://localhost:3000/Movie/v1.0/';


class DisplayItems extends Component {

    //define state
   state = {
    allMovies: []
  };

  //Get data from api
   async componentDidMount() {
       const response = await 
        axios.get(apiGetData);
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

    /* Container that passes the values to itemcard then displays */
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.allMovies.map(movies => <div className="col-4" key={movies.id}>
                        <ItemCard key={movies.id} movies={movies} /></div>)}
                </div>
            </div>
        );
    }
}

export default DisplayItems;