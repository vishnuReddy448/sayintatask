

import React, { Component } from "react";
import {Motion, spring} from 'react-motion';
import Box from './Box'
import './App.css'

class Row extends React.Component {

    render() {
        var box = [];
        var styl;
        styl = {
            marginTop: this.props.data.spacebwRows + "px"
        }
        for (var i = 0; i <= this.props.columns; i++) {
            if (i != 0) {
                box.push(<Box space={this.props.data.spacebwClmns} index = {i} />)
            }
        }
        return (
            <div className="row" style={styl}>
                {box}
            </div>
        )
    }

}

export default Row;

