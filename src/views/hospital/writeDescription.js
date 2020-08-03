import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/InputGroup";
//질병 코드 검색 바 가져오기
import SearchDiseaseCode from "./searchDiseaseCode"
import AddMedicines from "./Medicine/addMedicines"

const useStyles = makeStyles(styles);


function SearchPatient() {
  const classes = useStyles();
  const tableHead = ["이름", "주민번호", "전화"];

  const [patient, setPatient] = useState([]);
  const [name, setName] = useState([]);
  const [ssn, setSsn] = useState([]);

  // 검색
  const search = () => {
    axios
      .get("/api/patient/search", {
        params: {
          name,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPatient([...res.data]);
      });
  };

  const check = () => {
    axios
      .get("/api/patient/check", {
        params: { name, ssn },
      })
      .then((res) => {
        console.log(res.data);
        setSsn([...res.data]);
      });
  };

  return (
    <div class="container">
      <form method="get" action="/hospital/writeDescriptionSuccess">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>환자 정보</h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="name"
                  id="Name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  onChange={(e) => setName(e.target.value)}
                />
                <GridItem xs={12} sm={12} md={3}>
                  <Button color="primary" onClick={() => search()}>
                    SEARCH
                  </Button>
                </GridItem>
              </CardBody>
              <CardBody>
                <Table className={classes.table}>
                  <TableHead className={classes["primary" + "TableHeader"]}>
                    <TableRow className={classes.tableHeadRow}>
                      {tableHead.map((prop, key) => {
                        return (
                          <TableCell
                            className={
                              classes.tableCell + " " + classes.tableHeadCell
                            }
                            key={key}
                          >
                            {prop}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {patient.map((prop, key) => {
                      return (
                        <TableRow key={key} className={classes.tableBodyRow}>
                          <TableCell className={classes.tableCell}>
                            {prop.name}
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            {prop.ssn}
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            {prop.tel}
                          </TableCell>

                          <TableCell className={classes.tableCell}>
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Radio
                                  name="name"
                                  aria-label="Radio for following text input"
                                />
                              </InputGroup.Prepend>
                              <FormControl aria-label="Text input with radio" />
                            </InputGroup>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </form>
    </div>
  );
}

const WriteDescription = () => {
  
  const classes = useStyles();
  
  return (
    <div class="container">
      
      {/* 처방전 폼 태그 시작 */}
      <form method="post" action="/hospital/writeDescription">
        <GridContainer>
         
          {/* 환자 정보 입력 바 시작 */}
          <SearchPatient />
          {/* 환자 정보 입력 바 끝 */}
          
          {/* 질병 분류 기호 검색 바 시작 */}
          <SearchDiseaseCode />
          {/* 질병 분류 기호 검색 바 끝 */}

          {/* 처방 의약품 목록 생성 바 시작 */}
          <AddMedicines />
          {/* 처방 의약품 목록 생성 바 끝 */}

          {/* 조제시 참고사항 바 시작 */}
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>조제시 참고사항</h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="처방시 유의사항에 대해 적어주세요!"
                  id="note"
                  name="note"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                  }}
                />
              </CardBody>
            </Card>
          </GridItem>
          {/* 조제시 참고사항 바 끝 */}

          {/* 처방 버튼 시작 */}
          <GridItem xs={11} sm={11} md={11} />
          <GridItem xs={1} sm={1} md={1}>
            <Link to={"/hospital/writeDescriptionSuccess"}>
              <Button variant="secondary" type="submit">
                처방
              </Button>
            </Link>
          </GridItem>
          {/* 처방 버튼 끝 */}
        </GridContainer>
      </form>
      {/* 처방전 폼 태그 끝 */}
    </div>
  );
};

export default WriteDescription;
