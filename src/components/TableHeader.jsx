import React, { Component } from 'react';

class TableHeader extends Component {
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
        return <thead>
            <tr>
                {this.props.columns.map(column => <th key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>{column.label}</th>)}
            </tr>
        </thead>;
    }
}
 
export default TableHeader;