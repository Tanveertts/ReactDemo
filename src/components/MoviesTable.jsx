import React from 'react';
import Link from 'react-router-dom/Link';
import Like from './common/Like';
import Table from './common/Table';

class MoviesTable extends React.Component {
   columns = [
       {path:'title', label:'Title', content: moviesItems =><Link to={`/Movies/${moviesItems._id}`}>{moviesItems.title}</Link>},
       {path:'genre.name', label:'Genre'},
       {path:'numberInStock', label:'Stock'},
       {path:'dailyRentalRate', label:'Rental'},
       {key:'like', content: moviesItems => ( <Like liked={moviesItems.liked} onClick={() => this.props.onLike(moviesItems)}/>)},
       {key:'delete', content: moviesItems => ( <button onClick={() => this.props.onDelete(moviesItems)} className="btn btn-danger btn-sm">Delete</button>) }
   ]
    render() { 
        const {movies, onSort, sortColoumn} = this.props;
        return (  
            <Table columns={this.columns} sortColoumn={sortColoumn} onSort={onSort} data={movies} />
         );
    }
}
 
 
export default MoviesTable;