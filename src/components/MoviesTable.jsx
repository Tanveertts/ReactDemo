import React from 'react';
import Like from '../components/common/Like';
import TableHeader from './TableHeader';

class MoviesTable extends React.Component {
   columns = [
       {path:'title', label:'Title'},
       {path:'genre.name', label:'Genre'},
       {path:'numberInStock', label:'Stock'},
       {path:'dailyRentalRate', label:'Rental'},
       {key:'like'},
       {key:'delete'}
   ]
    render() { 
        const {movies, onDelete, onLike, onSort, sortColoumn} = this.props;
        return (  <table className="table">
            <TableHeader columns={this.columns} onSort={onSort} sortColoumn={sortColoumn}/>
       
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