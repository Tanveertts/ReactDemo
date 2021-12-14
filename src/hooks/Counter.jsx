import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }
    render() {
        const list = this.state.tags;
        return <React.Fragment><span className={this.handleClass()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment </button>
            <ul>
                {list.map(list => <li key={list}>{list}</li>)}
            </ul>
        </React.Fragment>;
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    formatCount = () => {
        const { count } = this.state;
        return count === 0 ? 'zero' : count;

    }

    handleClass() {
        const { count } = this.state;
        let classes = "badge m-2 badge-";
        classes += count === 0 ? 'warning' : 'primary';
        return classes;
    }
}

export default Counter;