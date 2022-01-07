import React from 'react';

class List extends React.Component {
    render() { 
        const {items, textProperty, valueProperty, selectedItem, onClick} = this.props;
        return (
        <ul className="list-group">
            {items.map(genres => 
            <li key={genres[valueProperty]} style={{cursor: 'pointer'}} className={selectedItem === genres ? "list-group-item active" : "list-group-item"} onClick={() => onClick(genres)}>{genres[textProperty]}</li>)}
        </ul>
        )
    }
};

List.defaultProps = {
    valueProperty: "_id",
    textProperty: "name"
}
 
export default List;