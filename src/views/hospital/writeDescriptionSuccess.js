import React, { useState, useEffect, Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import axios from "axios";
// @material-ui/core components

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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.warning.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

export default function TableList() {
  const classes = useStyles();

  const [descriptions, setDescriptions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDescriptions = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 Descriptions 를 초기화하고
      setError(null);
      setDescriptions(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/descriptions/"
      );
      setDescriptions(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDescriptions();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!descriptions) return null;

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">환자 이름</StyledTableCell>
                    <StyledTableCell align="center">
                      질병 분류 번호
                    </StyledTableCell>
                    <StyledTableCell align="center">의료기관</StyledTableCell>
                    <StyledTableCell align="center">
                      처방 의료인
                    </StyledTableCell>
                    <StyledTableCell align="center">사용 기간</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {descriptions.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {row.patient}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.disease}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.hospital_name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.doctor}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.createDate}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      처방 의약품 명칭
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      1회 투여 횟수
                    </StyledTableCell>
                    <StyledTableCell align="center">1회 투여량</StyledTableCell>
                    <StyledTableCell align="center">투약 일수</StyledTableCell>
                    <StyledTableCell align="center">용별</StyledTableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
