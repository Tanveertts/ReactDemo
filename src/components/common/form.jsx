import React, { Component } from "react";
import joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  validate = () => {
    const options = { abortEarly: false };
    const { error } = joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
    // const errors = {}
    // if(this.state.data.username.trim() === "")
    //     errors.username = 'Username is required.';
    // if(this.state.data.password.trim() === "")
    //     errors.password = 'Password is required.';

    //   return  Object.keys(errors).length === 0 ? null : errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = joi.validate(obj, schema);
    return error ? error.details[0].message : null;
    // if(!error) return null;
    // return error.details[0].message;

    // if(name === 'username'){
    //     if(value.trim() === '') return 'Username is required';
    // }
    // if(name === 'password'){
    //     if(value.trim() === '') return 'Password is required';
    // }
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);
    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || "" });
    if (errors) return;
    this.doSubmit();
  };
  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        onChange={this.handleChange}
        error={errors[name]}
        value={data[name]}
        name={name}
        id="username"
        type={type}
        label={label}
      />
    );
  };
}

export default Form;
