import React from 'react';

const Input = (props) => {
    const {onChange, value, name, type, label,error} = props;
    return ( <div className="form-group">
        <label htmlFor="userName">{label}</label>
        <input onChange={onChange} value={value} name={name} id={name} type={type} className="form-control" />
        {error && <div className="alert alert-danger">{error}</div>}
        </div> );
}
 
export default Input;