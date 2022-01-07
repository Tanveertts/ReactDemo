import React from 'react';
import Like from '../components/common/Like';

class MoviesTable extends React.Component {
    raiseSort = (path) =>{
            const sortColoumn = {...this.props.sortColoumn};
            if(sortColoumn.path === path)
            sortColoumn.order = (sortColoumn.order === 'asc') ? 'desc' : 'asc';
            else{
                sortColoumn.path = path;
                sortColoumn.order = 'asc';
            }
            this.props.onSort(sortColoumn);
    }
    render() { 
        const {movies, onDelete, onLike} = this.props;
        return (  <table className="table">
        <thead>
            <tr>
                <th onClick={() => this.raiseSort('title')}>Title</th>
                <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
                <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
                <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
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
                <td><Like liked={moviesItems.liked} onClick={() => onLike(moviesItems)}/></td>
                <td><button onClick={() => onDelete(moviesItems)} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
            )}
        </tbody>
    </table> );
    }
}
 
 
export default MoviesTable;