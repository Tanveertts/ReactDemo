import React from "react";
import MoviesTable from "./MoviesTable";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/Paginate";
import { getGenres } from "../services/fakeGenreService";
import List from "../components/List";
import _ from "lodash";
import { Link } from "react-router-dom";
class Movies extends React.Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genre: [],
    sortColoumn: [{ path: "title", order: "asc" }],
    // selectedGenre:[]
  };
  componentDidMount() {
    const genre = [{ _id: "", name: "All Movies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genre: genre });
  }
  handleDelte(moviesItems) {
    const movies = this.state.movies.filter((m) => m._id !== moviesItems._id);
    this.setState({ movies });
    console.log(moviesItems);
  }
  handleLIke(movie) {
    // const movies = {...this.state.movies};
    // const index = movies.indexOf(moviesItems);
    // movies[index] = { ...movies[index] };
    // movies[index].liked = !movies[index].liked;
    // this.setState({movies});
    // const movies = [...this.state.movies];
    // const index = movies.indexOf(moviesItems);
    // movies[index] = { ...movies[index] };
    // movies[index].liked = !movies[index].liked;
    // this.setState({ movies });
    // console.log(moviesItems);

    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenre = (genreItem) => {
    //const genreIndex = indexOf(genreItem);
    console.log(genreItem);
    this.setState({ selectedGenre: genreItem, currentPage: 1 });
  };
  handleSort = (sortColoumn) => {
    this.setState({ sortColoumn });
    //console.log(path);
  };
  getPageData() {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColoumn,
      movies: allMovies,
    } = this.state;
    const filterd =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filterd, sortColoumn.path, sortColoumn.order);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filterd.length, data: movies };
  }
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColoumn } = this.state;
    const { totalCount, data: movies } = this.getPageData();
    if (count === 0) return <p>There are no movies in database</p>;

    return (
      <div className="row">
        <div className="col-sm-3">
          <List
            onClick={this.handleGenre}
            items={this.state.genre}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col-sm-9">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p>There are {totalCount} movies in database</p>
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelte}
            onLike={this.handleLIke}
            onSort={this.handleSort}
            sortColoumn={sortColoumn}
          />
          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
