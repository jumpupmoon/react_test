import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import { Pagination } from "@material-ui/lab";

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

export default function SearchDescription() {
  const classes = useStyles();
  const tableHead = ["ID", "환자명", "의사ID", "병명", "진료일자"];

  const [description, setDescription] = useState([]);
  const [patient, setPatient] = useState();
  const [date, setDate] = useState();
  const [doctor, setDoctor] = useState();
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const [endPage, setEndPage] = useState(0);

  // 정렬
  useEffect(() => {
    if (sort === undefined) return;
    setPage(1);
    search();
  }, [sort]);

  // 페이지 변경시 검색 결과 새로고침
  useEffect(() => {
    if (endPage == 0) return;
    search();
  }, [page]);

  // 검색
  const search = () => {
    axios
      .get("/api/description/search", {
        params: {
          patient,
          date,
          doctor,
          sort,
          page,
        },
      })
      .then((res) => {
        console.log(res.data);
        setEndPage(res.data[1]);
        setDescription([...res.data[0]]);
      });
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <GridContainer>
      {/* 처방전 검색 바 시작 */}
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          {/* 검색 바 헤더 시작 */}
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>처방전 검색</h4>
            <p className={classes.cardCategoryWhite}>
              환자 이름, 진료 날짜, 진료 의사로 검색해보세요.
            </p>
          </CardHeader>
          {/* 검색 바 헤더 끝 */}
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="patient name"
                  id="patientName"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  onChange={(e) => setPatient(e.target.value)}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="Date of treatment"
                  id="dataTreatment"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  onChange={(e) => setDate(e.target.value)}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="doctorId"
                  id="doctorId"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  onChange={(e) => setDoctor(e.target.value)}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Button color="primary" onClick={() => search()}>
                  SEARCH
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </GridItem>
      {/* 처방전 검색 바 끝 */}
      {/* 처방전 검색 결과화면 시작   */}
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>처방전 조회 결과</h4>
            <p className={classes.cardCategoryWhite}>
              검색 조건에 맞는 처방전 결과를 조회합니다.
            </p>
          </CardHeader>
          <br />
          <GridItem xs={12} sm={12} md={3}>
            <select name="sort" onChange={(e) => setSort(e.target.value)}>
              <option value="">정렬 순</option>
              <option value="createDate">진료일자</option>
              <option value="patient">환자명</option>
            </select>
          </GridItem>
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
                {description.map((prop, key) => {
                  return (
                    <TableRow key={key} className={classes.tableBodyRow}>
                      <TableCell className={classes.tableCell}>
                        {prop._id}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {prop.patient}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {prop.doctor}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {prop.disease}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {prop.createDate}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            {/* 페이징 */}
            <div className={classes.pageNation}>
              <Pagination count={endPage} page={page} onChange={handleChange} />
            </div>
          </CardBody>
        </Card>
      </GridItem>
      {/* 처방전 검색 결과화면 끝   */}
    </GridContainer>
  );
}
