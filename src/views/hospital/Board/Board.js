import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from 'react-bootstrap/Table';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import axios from 'axios';
import BoardRow from 'views/hospital/Board/BoardRow';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

const useStyles = makeStyles(styles);

export default function Board() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>게시판</h4>
            </CardHeader>
            <CardBody>
              <Boardlist />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

class Boardlist extends Component {

  constructor(props) {
    super(props);
    this.state = {board: []};
  }
  componentDidMount(){
    console.log("zzz")
    axios.get('/api/board/read')
      .then(response => {
        console.log("!!!!!!")
        this.setState({ board: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  tabRow(){
    return this.state.board.map(function(object, i){
        return <BoardRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Link to = {'/hospital/write'}><Button>글쓰기</Button></Link>
        {/* <h3 align="center">게시판</h3> */}
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>writer</th>
              <th>title</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
      </div>
    );
  }
  
}

