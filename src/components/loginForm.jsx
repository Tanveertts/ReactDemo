import React from 'react';
import joi from 'joi-browser';
import Input from './common/input';
import Form from './common/form';


class LoginForm extends Form {
    state = {
        data:{username:"", password:""},
        errors: {username:"", password:""}
    }
    schema = {
        username: joi.string().required().label('Username'),
        password: joi.string().required().label('Password')
    }
    doSubmit = () =>{
        console.log('submitted');
    }
    render() { 
        const {data, errors} = this.state; 
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input onChange={this.handleChange} error={errors.username} value={data.username} name="username" id="username" type="text" label="Username"/>
                <Input onChange={this.handleChange} error={errors.password} value={data.password} name="password" id="password" type="password" label="Password"/>
                {/* <div className="form-group"><label htmlFor="userName">Username</label><input onChange={this.handleChange} value={data.username} autoFocus name="username" id="userName" type="text" className="form-control" /></div>
                <div className="form-group"><label htmlFor="password">Password</label><input onChange={this.handleChange} value={data.password} name="password" id="password" type="text" className="form-control" /></div> */}
                <button disabled={this.validate()} className="btn btn-primary">Login</button>
            </form>
        </div> );
    }
}
 


export default LoginForm;