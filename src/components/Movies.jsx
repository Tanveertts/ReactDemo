import React from 'react';
import MoviesTable from './MoviesTable';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/Pagination';
import {paginate} from '../utils/Paginate';
import {getGenres} from '../services/fakeGenreService';
import List from '../components/List';
import _ from 'lodash';
class Movies extends React.Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genre : [],
        sortColoumn: [{path:'title', order:'asc'}]
       // selectedGenre:[]
    }
    componentDidMount(){
        const genre = [{ _id : '', name:'All Movies'}, ...getGenres()]
        this.setState({movies:getMovies(), genre:genre});
    }
    handleDelte(moviesItems){
        const movies = this.state.movies.filter(m => m._id !== moviesItems._id);
        this.setState({movies});
        console.log(moviesItems);
    };
    handleLIke(moviesItems){
        const movies = {...this.state.movies};
        const index = movies.indexOf(moviesItems);
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
        console.log(moviesItems);
    };
    handlePageChange = (page) =>{
        this.setState({currentPage:page});
    }
    handleGenre = (genreItem) => {
      //const genreIndex = indexOf(genreItem);
      console.log(genreItem);
      this.setState({selectedGenre: genreItem, currentPage: 1});
    }
    handleSort = (sortColoumn) => {
        this.setState({sortColoumn});
        //console.log(path);
    }
    render() { 
        const {length: count} = this.state.movies;
        const { pageSize, currentPage, selectedGenre, sortColoumn, movies:allMovies} = this.state;
        if(count === 0)
        return <p>There are no movies in database</p>;
        const filterd = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const sorted = _.orderBy(filterd, sortColoumn.path, sortColoumn.order);
        const movies = paginate(sorted, currentPage, pageSize);
        return (

             <div className='row'>
        <div className='col-sm-3'>
      <List onClick={this.handleGenre} items={this.state.genre} selectedItem={this.state.selectedGenre}/>
      </div>
      <div className='col-sm-9'>
      
        <p>There are {count} movies in database</p>
       <MoviesTable movies={movies} onDelete={this.handleDelte} onLike={this.handleLIke} onSort={this.handleSort} sortColoumn={sortColoumn}/>
        <Pagination itemCount={filterd.length } pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange} />
        </div>
        </div>
        )
    }
}
 
export default Movies;