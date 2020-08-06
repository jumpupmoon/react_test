import React, { useState, useEffect, Component } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import "bootstrap/dist/css/bootstrap.min.css";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();

  const [docters, setDocters] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDocters = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 Docters 를 초기화하고
      setError(null);
      setDocters(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/doctors");
      setDocters(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDocters();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!docters) return null;

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>병원 관리</h4>
            <p className={classes.cardCategoryWhite}>의사 정보 관리</p>
          </CardHeader>
          <CardBody>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>로그인 ID</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>이름</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>전공</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>면허번호</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {docters.map((docter) => (
                    <TableRow key={docter.id}>
                      <TableCell component="th" scope="row">
                        {docter.id}
                      </TableCell>
                      <TableCell align="center">{docter.name}</TableCell>
                      <TableCell align="center">{docter.major}</TableCell>
                      <TableCell align="center">{docter.license}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Create />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeMajor = this.onChangeMajor.bind(this);
    this.onChangeLicense = this.onChangeLicense.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: "",
      name: "",
      password: "",
      major: "",
      license: "",
    };
  }
  onChangeId(e) {
    this.setState({
      id: e.target.value,
    });
  }
  onChang;
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeMajor(e) {
    this.setState({
      major: e.target.value,
    });
  }
  onChangeLicense(e) {
    this.setState({
      license: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    e.preventDefault();
    const obj = {
      id: this.state.id,
      name: this.state.name,
      password: this.state.password,
      major: this.state.major,
      license: this.state.license,
    };
    axios.post("http://localhost:5000/api/doctors", obj).then((res) => {
      console.log(res.data);
      document.location.href = "/hospital/manageHospital";
    });

    this.setState({
      name: "",
      password: "",
      major: "",
      license: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>의사추가</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>로그인 ID : </label>
            <input
              required
              type="email"
              className="form-control"
              value={this.state.id}
              onChange={this.onChangeId}
            />
          </div>
          <div className="form-group">
            <label>비밀번호 : </label>
            <input
              required
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <label>이름 : </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>전공 : </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.major}
              onChange={this.onChangeMajor}
            />
          </div>
          <div className="form-group">
            <label>면허번호 : </label>
            <input
              required
              type="number"
              className="form-control"
              value={this.state.license}
              onChange={this.onChangeLicense}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="등록" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
