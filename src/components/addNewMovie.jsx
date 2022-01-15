import React from "react";
import joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";

class AddNewMovie extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: { username: "", password: "" },
    genre: [],
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
  }
  schema = {
    username: joi.string().required().email().label("Username"),
    password: joi.string().required().min(5).label("Password"),
    name: joi.string().required().label("Name"),
  };
  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelectInput("genre", "Genre", this.state.genre)}
          {this.renderInput("stock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {/* <Input onChange={this.handleChange} error={errors.username} value={data.username} name="username" id="username" type="text" label="Username"/>
                    <Input onChange={this.handleChange} error={errors.password} value={data.password} name="password" id="password" type="password" label="Password"/> */}
          {/* <div className="form-group"><label htmlFor="userName">Username</label><input onChange={this.handleChange} value={data.username} autoFocus name="username" id="userName" type="text" className="form-control" /></div>
                    <div className="form-group"><label htmlFor="password">Password</label><input onChange={this.handleChange} value={data.password} name="password" id="password" type="text" className="form-control" /></div> */}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default AddNewMovie;
