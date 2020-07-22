import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from 'react-bootstrap/Table';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(styles);

export default function WriteDescriptionSuccess() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>처방전</h4>
            </CardHeader>
            <CardBody>
            <Table bordered hover >
                  <tbody>
                    <tr align='center'>
                        <th>환자 이름 </th>
                        <th>질병 분류 번호 </th>
                        <th>의료기관</th>
                        <th>처방 의료인</th>
                        <th colSpan='2'>사용 기간</th>
                        

                    </tr>
                    <tr>
                        <td>망치 </td>
                        <td>감기</td>
                        <td>약이요병원</td>
                        <td>윤씨</td>
                        <td colSpan='2'>07.12</td>
                        
                    </tr>
                    <tr align='center'>
                        <th colSpan='2'>처방 의약품 명칭 </th>
                        <th> 1회 투여 횟수</th>
                        <th>1회 투여량</th>
                        <th>투약 일수</th>
                        <th colSpan='2'>용 별</th>
                    </tr>
                    <tr>
                        <td rowSpan='1' colSpan='2'>
                          감기약
                          </td>
                        <td rowSpan='1'>1</td>
                        <td rowSpan='1'>1</td>
                        <td rowSpan='1'>3</td>
                        <td rowspan='2'>용별</td>
                    </tr>
                    <tr>
                    </tr>
                  </tbody>
                 </Table>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
