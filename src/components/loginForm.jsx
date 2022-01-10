import React from 'react';


class LoginForm extends React.Component {
    state = {
        account:{username:"", password:""}
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        console.log('submitted');
    }
    render() { 
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group"><label htmlFor="userName">Username</label><input id="userName" type="text" className="form-control" /></div>
                <div className="form-group"><label htmlFor="password">Password</label><input id="password" type="text" className="form-control" /></div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div> );
    }
}
 


export default LoginForm;