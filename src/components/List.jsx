import React, { Component } from 'react';
import {getGenres} from '../services/fakeGenreService';

class List extends React.Component {
    state = {
        genre : getGenres()
    }
    render() { 
        return (
        <ul className="list-group">
            <li style={{cursor: 'pointer'}}  className="list-group-item">All Movies</li>
            {this.state.genre.map(genres => 
            <li style={{cursor: 'pointer'}} className="list-group-item" onClick={() => this.props.onClick(genres)}>{genres.name}</li>)}
        </ul>
        )
    }
}
 
export default List;