import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";

import Table from "react-bootstrap/Table";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";

import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

export default class Descriptions extends Component {
  constructor(props) {
    super(props);
    this.onChangepatient = this.onChangepatient.bind(this);
    this.onChangedisease = this.onChangedisease.bind(this);
    this.onChangehospital_name = this.onChangehospital_name.bind(this);
    this.onChangedoctor = this.onChangedoctor.bind(this);
    this.onChangecreateDate = this.onChangecreateDate.bind(this);

    this.state = {
      patient: "",
      disease: "",
      hospital_name: "",
      doctor: "",
      createDate: "",
      id: queryString.parse(this.props.location.search).id,
    };
  }

  componentDidMount() {
    axios
      .get("/api/descriptions/" + this.state.id)
      .then((response) => {
        console.log(response);
        this.setState({
          patient: response.data.patient,
          disease: response.data.disease,
          hospital_name: response.data.hospital_name,
          doctor: response.data.doctor,
          createDate: response.data.createDate,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangepatient(e) {
    this.setState({
      patient: e.target.value,
    });
  }
  onChangedisease(e) {
    this.setState({
      disease: e.target.value,
    });
  }
  onChangehospital_name(e) {
    this.setState({
      hospital_name: e.target.value,
    });
  }
  onChangedoctor(e) {
    this.setState({
      doctor: e.target.value,
    });
  }
  onChangecreateDate(e) {
    this.setState({
      createDate: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <Table bordered hover>
                  <tbody>
                    <tr align="center">
                      <th>환자 이름 </th>
                      <th>질병 분류 번호 </th>
                      <th>의료기관</th>
                      <th>처방 의료인</th>
                      <th colSpan="2">사용 기간</th>
                    </tr>
                    <tr>
                      <td>{this.state.patient}</td>
                      <td>{this.state.disease}</td>
                      <td>{this.state.hospital_name}</td>
                      <td>{this.state.doctor}</td>
                      <td colSpan="2">{this.state.createDate}</td>
                    </tr>
                    <tr align="center">
                      <th colSpan="2">처방 의약품 명칭 </th>
                      <th> 1회 투여 횟수</th>
                      <th>1회 투여량</th>
                      <th>투약 일수</th>
                      <th colSpan="2">용 별</th>
                    </tr>
                    <tr>
                      <td rowSpan="1" colSpan="2"></td>
                      <td rowSpan="1"></td>
                      <td rowSpan="1"></td>
                      <td rowSpan="1"></td>
                      <td rowspan="2"></td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
