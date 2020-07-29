import React, { Component } from 'react';
import { Route } from "react-router-dom";
import  Edit  from "./detail.js";
import { Link } from 'react-router-dom';
class BoardRow extends Component {

  constructor(props) {
      super(props);
      this.state = {board: []};
  }

  move() {
    return this.state.board.map(function(object, i){
      return <Edit obj={object} key={i} />;
  });
  }
  // onClick={this.move}
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.writer}
          </td>
          <td>
            <Link to ={"/edit/"+this.props.obj._id}><button  className="btn btn-danger">{this.props.obj.title}</button></Link>
          </td>
          <td>
            {this.props.obj.date}
          </td>
        </tr>
    );
  }
}

export default BoardRow;

function refreshPage(){ 
    window.location.reload(); 
}