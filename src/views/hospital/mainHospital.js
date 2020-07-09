import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import logo from "assets/img/mainCard.jpg";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardBody>
          <center>
            <img src={logo} style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </center>
          <center>
            <h2>환자의 처방전을 안전하게 전송합니다**</h2>
          </center>
        </CardBody>
      </Card>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>최근 처방전 현황</h4>
              <p className={classes.cardCategoryWhite}>
                최근 5개의 처방전 현황을 보여줍니다.
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["발행일자", "이름", "성별", "병명"]}
                tableData={[
                  ["2020-07-05", "창진쿤", "남성", "배고픔"],
                  ["2020-07-04", "바지", "남성", "우울함"],
                  ["2020-07-03", "자니윤", "남성", "지각함"],
                  ["2020-07-02", "웹디윤", "남성", "배고픔"],
                  ["2020-07-01", "창진쿤", "남성", "꿀꿀함"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>의사 현황</h4>
              <p className={classes.cardCategoryWhite}>
                현재 병원의 의사 현황을 보여줍니다.
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["ID", "이름", "의사면허번호"]}
                tableData={[
                  ["1", "김기범", "36738"],
                  ["2", "윤창진", "23789"],
                  ["3", "진지훈", "56142"],
                  ["4", "추은정", "38735"],
                  ["5", "황형진", "18735"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
