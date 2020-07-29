import React from "react";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import logo from "assets/img/mainCard.jpg";
import Limit from 'views/hospital/Board/limit';
import { Component } from "react";
import axios from 'axios';
import DescriptionRow from 'views/hospital/Board/description'


const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardBody>
          <center>
            <img src={logo} style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </center>
        </CardBody>
      </Card>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>최근 처방전 현황</h4>
              <p className={classes.cardCategoryWhite}>
                최근 5개의 처방전 현황을 보여줍니다.
              </p>
            </CardHeader>
            <CardBody>
             <MainDes />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">

              <h4 className={classes.cardTitleWhite}>공지사항</h4>
              <p className={classes.cardCategoryWhite}>
                최근 5개의 공지사항을 보여줍니다.
              </p>
            </CardHeader>
            <CardBody>
            <Mainboard />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}


class Mainboard extends Component {

  constructor(props) {
    super(props);
    this.state = {board: []};
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/board/limit')
      .then(response => {
        this.setState({ board: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  Row(){
    return this.state.board.map(function(object, i){
        return <Limit obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>writer</th>
              <th>title</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            { this.Row() }
            

          </tbody>
        </table>
      </div>
    );
  }
  
}


class MainDes extends Component {

  constructor(props) {
      super(props);
      this.state = {description : []};
  }

  componentDidMount(){
    console.log("ggg")
    axios.get('http://localhost:5000/api/description/read5')
        .then(response => {
          console.log('연결')
          this.setState({ description : response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
        
  } 

  tabDes(){
    return this.state.description.map(function(object, i){
      return <DescriptionRow obj={object} key={i} />;
     });
  }

render() {
  return (
    <div>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>환자명</th>
            <th>진료일자</th>
            <th>의사ID</th>
            <th>병명</th>
          </tr>
        </thead>
        <tbody>
          { this.tabDes() }
        </tbody>
      </table>
    </div>
  );
}
}

