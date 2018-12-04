
import React, { Component } from "react";
import Row from './Row'


class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      noOfRows: 0,
      noOfColumns: "0,0",
      spacebwRows: "0",
      spacebwClmns: "0"
    };
  }


  rowsHandleChange = e => {
    this.setState({
      noOfRows: e.target.value
    })
  }


  columnsHandleChange = e => {
    this.setState({
      noOfColumns: e.target.value
    })
  }

  rowSpaceChange = e => {
    this.setState({
      spacebwRows: e.target.value
    })
  }

  columnSpaceChange = e => {
    this.setState({
      spacebwClmns: e.target.value
    })
  }

  render() {
    var row = [];
    var columns = this.state.noOfColumns.split(',')
    for (var i = 0; i <= this.state.noOfRows; i++) {
      if (i != 0) {
        row.push(<Row data={this.state} index={i} columns={i == 1 ? columns[0] : columns[1]} />)
      }
    }

    return (

      <div className = "App">
        <input name = "no-of-rows"  placeholder={"No.Of Rows"} onChange={this.rowsHandleChange} />
        <input name = "columns-string"  placeholder={"Column string"} onChange={this.columnsHandleChange} />
        <input name = "gutter-row" placeholder={"Space between Rows"} onChange={this.rowSpaceChange} />
        <input name = "gutter-col"  placeholder={"Space between Columns"} onChange={this.columnSpaceChange} />
        {row}
      </div>
    )
  }

}

export default App;
