import React, { Component, Fragment } from 'react';
import Counter from './Counter';

class Counters extends React.Component {
  
    render() { 
        const {onReset, counter, onIncrement, onDelete, onDecrement} = this.props;
        return <Fragment>
            
            <button className="btn btn-secondary btn-sm" onClick={onReset}>Reset</button>
            {counter.map(counterItems => 
            <div>
                <Counter
                 onIncrement={onIncrement}
                 onDelete={onDelete}
                 onDecrement={onDecrement}
                 key={counterItems.id}
                 counter={counterItems}
                 /><br/>
            </div>
            )}
        
        </Fragment>;
    }
}
 
export default Counters;