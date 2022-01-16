import React from "react";
import joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie } from "../services/fakeMovieService";

class AddNewMovie extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
    genres: [],
  };
  schema = {
    title: joi.string().required().label("Title"),
    genreId: joi.string().required().label("Genre"),
    numberInStock: joi.number().min(0).max(100).required().label("Stock"),
    dailyRentalRate: joi.number().min(0).max(10).required().label("Rate"),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
  }
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
    console.log(this.state.data);
  };
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelectInput("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default AddNewMovie;
