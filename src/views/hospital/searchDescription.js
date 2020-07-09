import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

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
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="Date of treatment"
                  id="dataTreatment"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="doctorId"
                  id="doctorId"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Button color="primary">SEARCH</Button>
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
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "환자명", "진료일자", "의사ID", "병명"]}
              tableData={[
                ["1", "윤창진", "2020-02-22", "22", "Oud-Turnhout"],
                ["2", "진지훈", "2020-02-12", "23", "Sinaai-Waas"],
                ["3", "황형진", "2020-02-02", "345", "Baileux"],
                ["4", "추은정", "2020-03-22", "12", "Overland Park"],
                ["5", "김기범", "2020-12-22", "45", "Feldkirchen in Kärnten"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      {/* 처방전 검색 결과화면 끝   */}
    </GridContainer>
  );
}
