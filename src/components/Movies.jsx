import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { getMovies } from '../services/fakeMovieService';

class Movies extends React.Component {
    state = {
        movies: getMovies()
    }
    handleDelte(moviesItems){
        const movies = this.state.movies.filter(m => m._id !== moviesItems._id);
        this.setState({movies});

        console.log(moviesItems);

    }
    render() { 
        const {length: count} = this.state.movies;
        if(count === 0)
        return <p>There are no movies in database</p>;
        return (<Fragment>
        <p>There are {count} movies in database</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(moviesItems => 
                <tr key={moviesItems._id}>
                    <td>{moviesItems.title}</td>
                    <td>{moviesItems.genre.name}</td>
                    <td>{moviesItems.numberInStock}</td>
                    <td>{moviesItems.dailyRentalRate}</td>
                    <td><button onClick={() => this.handleDelte(moviesItems)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
                )}
            </tbody>
        </table>
        </Fragment>
        )
    }
}
 
export default Movies;