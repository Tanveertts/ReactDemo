import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';


const Table = ({columns, onSort, sortColoumn,data}) => {
    return ( <table className="table">
    <TableHeader columns={columns} onSort={onSort} sortColoumn={sortColoumn}/>
<TableBody columns={columns} data={data} />

</table> );
}
 
export default Table;