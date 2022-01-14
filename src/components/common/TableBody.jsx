import _ from "lodash";
import React, { Component } from "react";

class TableBody extends Component {
  renderCell = (items, column) => {
    if (column.content) return column.content(items);

    return _.get(items, column.path);
  };
  createKey = (items, column) => {
    return items._id + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((items) => (
          <tr key={items._id}>
            {columns.map((column) => (
              <td key={this.createKey(items, column)}>
                {this.renderCell(items, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
