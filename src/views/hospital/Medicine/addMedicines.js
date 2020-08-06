import React, {useState} from 'react';
import { Button } from "react-bootstrap";
//스타일 관련 모듈
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
//그리드 관련 모듈
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
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
//모달 창 관련 모듈
import AddModal from "views/hospital/Medicine/showModalBody";
//특정 url에서 데이터를 가져오기 위한 axios 모듈


//스타일 설정
const useStyles = makeStyles(styles);


  

const AddMedicines = () => {
    const classes = useStyles();
    
    
    const [medicines, setMedicines] = useState([['약1'],['약2'],['약3'],['약4'],['약5']]);   
    const [modalShow, setModalShow] = useState(false);

   
    const tableHead = ["의약품 명칭", "1회투약량", "1일투여횟수", "총량", "용법"];

    function closeModal(){
      setModalShow(false);
    }

    const deleteMedicine = (idx) => {
        let res = medicines.filter((row, i) => { return i !== idx; });
        setMedicines(res);
    };

    const addMedicine = (medicineName) =>{
      let temp = medicines.concat(["약8"]);      
      setMedicines(temp);
    }
    //확인 버튼을 누르면 input에 담긴 값을 키워드로 하여 상세정보 받아온 다음,
    //창 닫기
    
    return (        
        <GridItem xs={12} sm={12} md={12}>
          {/* 모달 추가 */}
        <AddModal show={modalShow} 
        onHide={closeModal} 
         />
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>처방 의약품 목록</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  {/* 약 추가 버튼 시작 */}
                  <GridItem xs={11} sm={11} md={11} />
                  <GridItem xs={1} sm={1} md={1}>
                    <Button color="primary" onClick={() => setModalShow(true)}>
                    추가
                    </Button>
                  </GridItem>
                  <GridItem xs={1} sm={1} md={1}>
                  <Button variant="danger" onClick={() => addMedicine()}>
                    추가
                  </Button>
                  </GridItem>
                  {/* 약 추가 버튼 끝 */}
                  <GridItem xs={11} sm={11} md={11}>
             
                    {/* 처방 의약품 목록 시작 */}
                    <Table className={classes.table}>
                      {/* 테이블 헤더 시작 */}
                      <TableHead className={classes["primary" + "TableHeader"]}>
                        <TableRow className={classes.tableHeadRow}>
                          {tableHead.map((prop, key) => {
                            return (
                              <TableCell
                                className={
                                  classes.tableCell +
                                  " " +
                                  classes.tableHeadCell
                                }
                                key={key}
                              >
                                {prop}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      </TableHead>
                      {/* 테이블 헤더 끝 */}

                      {/* 테이블 바디 시작*/}
                      <TableBody>
                        {/* 한 줄 한줄 반복문 시작 */}
                        {medicines.map((medicine, i) => {
                          return (
                            <TableRow
                              key={i}
                              className={classes.tableBodyRow}
                            >
                              {/* 의약품 이름 시작 */}                           
                              <TableCell
                                    className={classes.tableCell}  key={i}                                    
                                  >
                                    {i}{medicine}
                                  </TableCell>
                            
                              {/* 의약품 명칭 끝 */}

                              {/* 차례로 1회 투약량, 1일 투여횟수, 총량, 용법 셀 시작 */}
                              {/* 투약량 */}
                              <TableCell className={classes.tableCell}>
                                <CustomInput
                                  id="one_dose"
                                  name="one_dose"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </TableCell>
                              {/* 1일 투여횟수 */}
                              <TableCell className={classes.tableCell}>
                                <CustomInput
                                  id="daily_dose"
                                  name="daily_dose"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </TableCell>
                              {/* 총량 */}
                              <TableCell className={classes.tableCell}>
                                <CustomInput
                                  id="total_amount"
                                  name="total_amount"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </TableCell>
                              {/* 용법 */}
                              <TableCell className={classes.tableCell}>
                                <CustomInput
                                  id="usage"
                                  name="usage"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                />
                              </TableCell>
                              {/* 1회 투약량, 1일 투여횟수, 총량, 용법 셀 끝 */}

                              {/* 삭제 버튼 시작 */}
                              <TableCell className={classes.tableCell}>
                                
                                <Button
                                  variant="danger"
                                  onClick={() => deleteMedicine(i)}
                                >
                                  삭제
                                </Button>
                              </TableCell>
                              {/* 삭제 버튼 끝 */}
                              
                            </TableRow>
                          );
                        })}
                        {/* 한줄 반복문 끝 */}
                      </TableBody>
                      {/* 테이블 바디 끝 */}
                    </Table>
                    {/* 처방 의약품 목록 끝 */}
                  
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
    );
};

export default AddMedicines;