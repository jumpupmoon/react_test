import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import GridItem from "components/Grid/GridItem.js";
//카드 관련 모듈
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
//테이블 관련 모듈
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import { Button } from "react-bootstrap";


const useStyles = makeStyles(styles);
let barIsVisible = true;
let resultIsVisible = false;

const SearchDiseaseCode = () => {
    const classes = useStyles();

    const [sickCdInfo, setSickCdInfo] = useState([]);
    const [searchText, setSearchText] = useState([]);
    //병명 검색 결과 테이블 어트리뷰트
    const tableHead = ["sickCd", "sickNm"];
    // SEARCH 버튼을 누르면 해당 함수 실행
  const searchCode = () => {
      axios
      .get("/api/disease/search", {
        params: {
          searchText,
        },
      })
      .then((res) => {
        console.log(res.data);
        if(res.data != null) {
          resultIsVisible = true;
          barIsVisible = false;
          setSickCdInfo(res.data);
        }  
      });
  };


    return (        
            <GridItem xs={12} sm={12} md={12}>            
            <Card>
              
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>질병 분류 기호</h4>
              </CardHeader>
             {/* 질병 코드 검색 창 시작 */}
             {barIsVisible &&
             <CardBody>
                <GridItem xs={11} sm={11} md={10}>
                  <CustomInput
                    labelText="질병 명칭 키워드 입력시 코드 정보 제공"
                    id="searchText"
                    formControlProps={{
                      fullWidth: true,
                    }} onChange={(e) => setSearchText(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={11} sm={11} md={1}>
                  <Button color="primary" onClick={() => searchCode()}>SEARCH</Button>
                </GridItem>
              </CardBody>    
            }        
            {/* 질병 코드 검색 창 끝 */}
            {/* 질병 코드 검색 결과 테이블 시작 */}
            {resultIsVisible &&
            <CardBody>
                <GridItem xs={11} sm={11} md={11}>
            <Table className={classes.table}>
                {/* 테이블 헤드 시작 */}
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
                  {/* 테이블 헤드 끝 */}
                  {/* 테이블 바디 시작 */}
                  <TableBody>                                      
                        <TableRow className={classes.tableBodyRow}>
                          <TableCell className={classes.tableCell}>
                            {sickCdInfo.sickCd}
                          </TableCell>
                          <TableCell className={classes.tableCell}>
                            {sickCdInfo.sickNm}
                          </TableCell>
                         </TableRow>                    
                  </TableBody>
                  {/* 테이블 바디 끝 */}
                </Table>
                </GridItem>
                </CardBody>
            }
            {/* 질병 코드 검색 결과 테이블 끝 */}
            </Card>
          </GridItem>               
        );
};

export default SearchDiseaseCode;
