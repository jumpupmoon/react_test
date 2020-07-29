import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from 'react-bootstrap/Table';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles(styles);


export default function Post() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>글쓰기</h4>
            </CardHeader>
            <CardBody>
                <Create />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeWriter = this.onChangeWriter.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        var today = new Date(),
        Calendar = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            writer: '',
            title: '',
            content:'',
            date: Calendar
        }
    }
    onChangeWriter(e) {
      this.setState({
        writer: e.target.value
      });
    }
    onChangeTitle(e) {
      this.setState({
        title: e.target.value
      })
    }
    onChangeContent(e) {
        this.setState({
          content: e.target.value
        })
      }

  
    onSubmit(e) {
      e.preventDefault();
      e.preventDefault();
      const obj = {
        writer: this.state.writer,
        title: this.state.title,
        content: this.state.content,
        date: this.state.date
      };
      axios.post('http://localhost:5000/api/board/add', obj) /////////////////////////////////////
          .then(res => {
            console.log(res.data)
            document.location.href = '/hospital/board'
          });
      console.log(`The values are ${this.state.title}, and ${this.state.writer}, ${this.state.content},${this.state.date}`)
      
      this.setState({
        writer: '',
        title: '',
        content:'',
        // date : Calendar
      })
    }
   
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>게시글</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Writer : </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.writer}
                          onChange={this.onChangeWriter}
                          />
                    </div>
                    <div className="form-group">
                        <label>Title : </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.title}
                          onChange={this.onChangeTitle}
                          />
                    </div>
                    <div className="form-group">
                        <label>Content : </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.content}
                          onChange={this.onChangeContent}
                          />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Post" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
  }

function recall(){ 
  Redirect('/board')
}