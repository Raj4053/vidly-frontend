import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", rate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
    rate: Joi.number().min(0).max(10).required(),
  };

  doSubmit = () => {
    //Call The Server
    console.log("Movie Saved");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {/* {this.renderInput('title', "Title")} */}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
