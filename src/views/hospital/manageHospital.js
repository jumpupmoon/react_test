import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
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
    // <ol>
    // {docters.map((docter) => (
    //   <li key={docter.id}>
    //     {docter.name} {docter.major} {docter.license}
    //   </li>
    // ))}
    //   <Example />
    // </ol>

    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>병원 관리</h4>
            <p className={classes.cardCategoryWhite}>의사 정보 관리</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["No", "ID", "이름", "전공", "면허번호"]}
              tableData={[
                [2, "dbs582", "오야봉", "고노야로 긴또깡", "이찌방 시보리"],
                [3, "aoa582", "지민", "이지메 이찌방", "슬프다"],
                [4, "qud582", "박원순", "슬프다", "나는 어디로"],
              ]}
            />
          </CardBody>
        </Card>
        <Example />
      </GridItem>
    </GridContainer>
  );
}

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" color="info" onClick={handleShow}>
        의사 추가
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>의사 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid container>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Name"
                id="Name"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  disabled: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                id="Major"
                inputProps={{
                  placeholder: "Major",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Doctor License Number"
                id="DLN"
                success
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="sarang123"
                id="Hospital ID"
                success
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="With material Icons"
                id="material"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People />
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" color="red" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="contained"
            color="info"
            startIcon={<SaveIcon />}
            onClick={handleClose}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
