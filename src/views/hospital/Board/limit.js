import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Limit extends Component {

    constructor(props) {
        super(props);
    }


  render() {
    return (
        <tr >
          <td>
            {this.props.obj.writer}
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id}>
            {this.props.obj.title}
          </Link>
          </td>
          <td>
            {this.props.obj.date}
          </td>
        </tr>
    );
  }
}

export default Limit;
