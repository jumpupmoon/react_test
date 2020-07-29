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
import Button from "components/CustomButtons/Button.js";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
//core components
import CustomInput from "components/CustomInput/CustomInput.js";
import SaveIcon from "@material-ui/icons/Save";

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
                      <b>이름</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>전공</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>면허번호</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {docters.map((docter) => (
                    <TableRow key={docter.id}>
                      <TableCell component="th" scope="row">
                        {docter.name}
                      </TableCell>
                      <TableCell align="right">{docter.major}</TableCell>
                      <TableCell align="right">{docter.license}</TableCell>
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

// function Example() {
//   const [show, setShow] = useState(false);
//   const [doctor, setDocters] = useState(null);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const addDoctor = async () => {
//     console.log();
//   };

//   return (
//     <>
//       <Button variant="primary" color="info" onClick={handleShow}>
//         의사 추가
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>의사 추가</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Grid container>
//             <GridItem xs={12} sm={12} md={4}>
//               <CustomInput
//                 labelText="이름"
//                 id="name"
//                 formControlProps={{
//                   fullWidth: true,
//                 }}
//               />
//             </GridItem>
//             <GridItem xs={12} sm={12} md={4}>
//               <CustomInput
//                 labelText="비밀번호"
//                 type="password"
//                 id="password"
//                 formControlProps={{
//                   fullWidth: true,
//                 }}
//               />
//             </GridItem>
//             <GridItem xs={12} sm={12} md={4}>
//               <CustomInput
//                 labelText="전공"
//                 id="major"
//                 formControlProps={{
//                   fullWidth: true,
//                 }}
//               />
//             </GridItem>
//             <GridItem xs={12} sm={12} md={4}>
//               <CustomInput
//                 labelText="면허번호"
//                 id="license"
//                 formControlProps={{
//                   fullWidth: true,
//                 }}
//               />
//             </GridItem>
//           </Grid>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" color="red" onClick={handleClose}>
//             취소
//           </Button>
//           <Button
//             variant="contained"
//             color="info"
//             startIcon={<SaveIcon />}
//             onClick={addDoctor}
//           >
//             추가
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeWriter = this.onChangeWriter.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    var today = new Date(),
      Calendar =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    this.state = {
      writer: "",
      title: "",
      content: "",
      date: Calendar,
    };
  }
  onChangeWriter(e) {
    this.setState({
      writer: e.target.value,
    });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeContent(e) {
    this.setState({
      content: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    e.preventDefault();
    const obj = {
      writer: this.state.writer,
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
    };
    axios
      .post("http://localhost:5000/api/board/add", obj) /////////////////////////////////////
      .then((res) => {
        console.log(res.data);
        document.location.href = "/hospital/board";
      });
    console.log(
      `The values are ${this.state.title}, and ${this.state.writer}, ${this.state.content},${this.state.date}`
    );

    this.setState({
      writer: "",
      title: "",
      content: "",
      // date : Calendar
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>게시글</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Writer : </label>
            <input
              type="text"
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
            <input
              type="text"
              className="form-control"
              value={this.state.content}
              onChange={this.onChangeContent}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Post"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
