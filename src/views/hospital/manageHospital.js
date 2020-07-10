import React, { useState } from "react";
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
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import "bootstrap/dist/css/bootstrap.min.css";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
//core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Icon from "@material-ui/core/Icon";
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
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>병원 관리</h4>
            <p className={classes.cardCategoryWhite}>의사 정보 관리</p>
          </CardHeader>
          <CardBody>
            <Example />
            <Table
              tableHeaderColor="primary"
              tableHead={["No", "ID", "이름", "전공", "면허번호"]}
              tableData={[
                [
                  1,
                  "ckd582",
                  "망치",
                  "아야 오함마 가져와야 쓰것다",
                  "정마담에게 밑에서 한장",
                ],
                [2, "dbs582", "오야봉", "고노야로 긴또깡", "이찌방 시보리"],
                [3, "aoa582", "지민", "이지메 이찌방", "슬프다"],
                [4, "qud582", "박원순", "슬프다", "나는 어디로"],
              ]}
            />
          </CardBody>
        </Card>
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
