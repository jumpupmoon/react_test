import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Add from 'views/hospital/addMedicine';

const useStyles = makeStyles(styles);

function AddModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                약 추가
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Add />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}> 추가 </Button> <Button onClick={props.onHide}>닫기</Button> 
        </Modal.Footer>
      </Modal>
    );
}

const WirteDescription = () => {
    let data = [
        ['약1'],
        ['약2'],
        ['약3'],
        ['약4'],
        ['약5'],
    ];

    const tableHead = [
        '약품명', '투여량', '투여횟수', '투약일수', '용법', ''
    ]

    const delMedi = (idx) => {
        let res = medicine.filter((row, i) => {
            return i !== idx;
        })
        setMedicine(res);
    }
    
    const classes = useStyles();
    const [medicine, setMedicine] = useState(data);
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <div class="container">
            <form method="get" action="/hospital/writeDescriptionSuccess">
                <AddModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>환자 정보</h4>
                            </CardHeader>
                            <CardBody>
                                이름 : 홍길동
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>병명</h4>
                            </CardHeader>
                            <CardBody>
                                <CustomInput
                                    labelText="질병분류기호"
                                    id="disease"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>약 목록</h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <Table className={classes.table}>
                                        <TableRow>
                                            <TableCell>
                                                사용기간
                                            </TableCell>
                                            <TableCell>교부일로부터</TableCell>
                                            <TableCell>
                                                <CustomInput
                                                labelText="사용기간"
                                                id="mediDay"
                                                formControlProps={{
                                                fullWidth: true
                                                }}
                                                />
                                            </TableCell>
                                            <TableCell>일간</TableCell>
                                            <TableCell><Button onClick={() => setModalShow(true)}>약 추가</Button></TableCell>
                                        </TableRow>                                            
                                    </Table>
                                </GridContainer>
                                
                                <div className={classes.tableResponsive}>
                                    <Table className={classes.table}>
                                        <TableHead className={classes['primary' + "TableHeader"]}>
                                            <TableRow className={classes.tableHeadRow}>
                                            {tableHead.map((prop, key) => {
                                                return (
                                                <TableCell
                                                    className={classes.tableCell + " " + classes.tableHeadCell}
                                                    key={key}
                                                >
                                                    {prop}
                                                </TableCell>
                                                );
                                            })}
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                        {medicine.map((prop, key) => {
                                            return (
                                            <TableRow key={key} className={classes.tableBodyRow}>
                                                {prop.map((prop, key) => {
                                                return (
                                                    <TableCell className={classes.tableCell} key={key}>
                                                    {prop}
                                                    </TableCell>
                                                );
                                                })}
                                                <TableCell className={classes.tableCell}>
                                                    <CustomInput
                                                    id=''
                                                    formControlProps={{
                                                    fullWidth: true
                                                    }} />
                                                </TableCell>
                                                <TableCell className={classes.tableCell}>
                                                    <CustomInput
                                                    id=''
                                                    formControlProps={{
                                                    fullWidth: true
                                                    }} />
                                                </TableCell>
                                                <TableCell className={classes.tableCell}>
                                                    <CustomInput
                                                    id=''
                                                    formControlProps={{
                                                    fullWidth: true
                                                    }} />
                                                </TableCell>
                                                <TableCell className={classes.tableCell}>
                                                    <CustomInput
                                                    id=''
                                                    formControlProps={{
                                                    fullWidth: true
                                                    }} />
                                                </TableCell>
                                                <TableCell className={classes.tableCell}>
                                                    <Button variant="danger" onClick={() => delMedi(key)}>삭제</Button>
                                                </TableCell>
                                            </TableRow>
                                            );
                                        })}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>추가사항</h4>
                            </CardHeader>
                            <CardBody>
                                <CustomInput
                                labelText="메모 특이사항 등"
                                id="about-me"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 5
                                }}
                                />
                            </CardBody>
                        </Card>                    
                    </GridItem>
                </GridContainer>

                <GridContainer>
                    <GridItem xs={11} sm={11} md={11} />
                    <GridItem xs={1} sm={1} md={1}>
                        <Link to = {'/hospital/writeDescriptionSuccess'}><Button variant="secondary" type="submit">처방</Button></Link>
                    </GridItem>
                </GridContainer>
            </form>
        </div>
    )
}

export default WirteDescription;