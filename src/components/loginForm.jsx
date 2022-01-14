import React from 'react';
import joi from 'joi-browser';
import Input from './common/input';


class LoginForm extends React.Component {
    state = {
        account:{username:"", password:""},
        errors: {username:"", password:""}
    }
    schema = {
        username: joi.string().required().label('Username'),
        password: joi.string().required().label('Password')
    }
    validate = () =>{
        const options = {abortEarly:false};
        const {error} = joi.validate(this.state.account, this.schema, options);
        if(!error) return null;
        const errors = {};
        for(let item of error.details) errors[item.path[0]] = item.message;
        return errors;
        // const errors = {}
        // if(this.state.account.username.trim() === "")
        //     errors.username = 'Username is required.';
        // if(this.state.account.password.trim() === "")
        //     errors.password = 'Password is required.';

        //   return  Object.keys(errors).length === 0 ? null : errors;
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const errors = this.validate();
        console.log(errors);
        this.setState({errors: errors || ''})
        if(errors) return;
        console.log('submitted');
    }
    validateProperty = ({name, value}) =>{
        const obj = {[name]:value};
        const schema = {[name]:this.schema[name]};
        const {error} =  joi.validate(obj, schema);
        return error ? error.details[0].message : null;
        // if(!error) return null;
        // return error.details[0].message;


        // if(name === 'username'){
        //     if(value.trim() === '') return 'Username is required';
        // }
        // if(name === 'password'){
        //     if(value.trim() === '') return 'Password is required';
        // }
    }
    handleChange = ({currentTarget:input}) => {
        const errors = {...this.state.errors};
        const errorMsg = this.validateProperty(input);
        if(errorMsg) errors[input.name] = errorMsg;
        else delete errors[input.name];
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account, errors });
    }
    render() { 
        const {account, errors} = this.state; 
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input onChange={this.handleChange} error={errors.username} value={account.username} name="username" id="username" type="text" label="Username"/>
                <Input onChange={this.handleChange} error={errors.password} value={account.password} name="password" id="password" type="password" label="Password"/>
                {/* <div className="form-group"><label htmlFor="userName">Username</label><input onChange={this.handleChange} value={account.username} autoFocus name="username" id="userName" type="text" className="form-control" /></div>
                <div className="form-group"><label htmlFor="password">Password</label><input onChange={this.handleChange} value={account.password} name="password" id="password" type="text" className="form-control" /></div> */}
                <button disabled={this.validate()} className="btn btn-primary">Login</button>
            </form>
        </div> );
    }
}
 


export default LoginForm;