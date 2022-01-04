import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { getMovies } from '../services/fakeMovieService';
import Like from '../components/common/Like';
import Pagination from './common/Pagination';
import {paginate} from '../utils/Paginate';
class Movies extends React.Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    }
    handleDelte(moviesItems){
        const movies = this.state.movies.filter(m => m._id !== moviesItems._id);
        this.setState({movies});
        console.log(moviesItems);
    };
    handleLIke(moviesItems){
        const movies = [...this.state.movies];
        const index = movies.indexOf(moviesItems);
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
        console.log(moviesItems);
    };
    handlePageChange = (page) =>{
        this.setState({currentPage:page});
    }
    render() { 
        const {length: count} = this.state.movies;
        const { pageSize, currentPage, movies:allMovies} = this.state;
        if(count === 0)
        return <p>There are no movies in database</p>;
        const movies = paginate(allMovies, currentPage, pageSize);
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map(moviesItems => 
                <tr key={moviesItems._id}>
                    <td>{moviesItems.title}</td>
                    <td>{moviesItems.genre.name}</td>
                    <td>{moviesItems.numberInStock}</td>
                    <td>{moviesItems.dailyRentalRate}</td>
                    <td><Like liked={moviesItems.liked} onClick={() => this.handleLIke(moviesItems)}/></td>
                    <td><button onClick={() => this.handleDelte(moviesItems)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
                )}
            </tbody>
        </table>
        <Pagination itemCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange} />
        </Fragment>
        )
    }
}
 
export default Movies;