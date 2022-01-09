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
renderSortIcon = (column) =>{
    const {sortColoumn} = this.props;
    if(column.path !== sortColoumn.path || column.path === undefined) return null;
    if(sortColoumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>
}
    render() { 
        return <thead>
            <tr>
                {this.props.columns.map(column => <th className='clickable' key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>{column.label} {this.renderSortIcon(column)}</th>)}
            </tr>
        </thead>;
    }
}
 
export default TableHeader;