import React  from 'react';

class Counter extends React.Component {
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }
    render() {
        return <React.Fragment><span className={this.handleClass()}>{this.formatCount()}</span>
            <button onClick={() =>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-primary btn-sm" disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-</button>        
        </React.Fragment>;
        
    }

    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? 'zero' : value;
    }

    handleClass() {
        const { value } = this.props.counter;
        let classes = "badge m-2 badge-";
        classes += value === 0 ? 'warning' : 'primary';
        return classes;
    }
}

export default Counter;