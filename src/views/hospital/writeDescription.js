import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
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
//import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
        '의약품 명칭', '1회투약량', '1일투여횟수', '총량', '용법']

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
            <AddModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            {/* 처방전 폼 태그 시작 */}
            <form method="post" action="/hospital/writeDescription">
                <GridContainer>
                    {/* 환자 정보 입력 바 시작 */}
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
                    {/* 환자 정보 입력 바 끝 */}
                    {/* 질병 분류 기호 검색 바 시작 */}
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>질병 분류 기호</h4>
                            </CardHeader>
                            <CardBody>
                                <GridItem xs={11} sm={11} md={10}>
                                    <CustomInput
                                        labelText="질병 명칭 키워드 입력시 코드 정보 제공"
                                        id="disease"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={11} sm={11} md={1}>
                                    {/* <Button color="primary" onClick={() => search()}>SEARCH</Button> */}
                                    <Button color="primary">SEARCH</Button>
                                </GridItem>
                            </CardBody>
                        </Card>
                    </GridItem>
                    {/* 질병 분류 기호 검색 바 끝 */}

                    {/* 처방 의약품 목록 생성 바 시작 */}
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>처방 의약품 목록</h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>

                                    {/* 약 추가 버튼 시작 */}
                                    <GridItem xs={11} sm={11} md={11} />
                                    <GridItem xs={1} sm={1} md={1}>
                                        <Button color="primary" onClick={() => setModalShow(true)}>약 추가</Button>
                                    </GridItem>
                                    {/* 약 추가 버튼 끝 */}

                                    <div className={classes.tableResponsive}>
                                        {/* 처방 의약품 목록 시작 */}
                                        <Table className={classes.table}>
                                            {/* 테이블 헤더 시작 */}
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
                                            {/* 테이블 헤더 끝 */}

                                            {/* 테이블 바디 시작*/}
                                            <TableBody>
                                                {medicine.map((prop, key) => {
                                                    return (
                                                        <TableRow key={key} className={classes.tableBodyRow}>
                                                            {/* 의약품 명칭 시작 */}
                                                            {prop.map((prop, key) => {
                                                                return (
                                                                    <TableCell className={classes.tableCell} key={key}>
                                                                        {prop}
                                                                    </TableCell>
                                                                );
                                                            })}
                                                            {/* 의약품 명칭 끝 */}

                                                            {/* 차례로 1회 투약량, 1일 투여횟수, 총량, 용법 셀 시작 */}
                                                            <TableCell className={classes.tableCell}>
                                                                <CustomInput
                                                                    id='one_dose' name='one_dose'
                                                                    formControlProps={{
                                                                        fullWidth: true
                                                                    }} />
                                                            </TableCell>
                                                            <TableCell className={classes.tableCell}>
                                                                <CustomInput
                                                                    id='daily_dose' name='daily_dose'
                                                                    formControlProps={{
                                                                        fullWidth: true
                                                                    }} />
                                                            </TableCell>
                                                            <TableCell className={classes.tableCell}>
                                                                <CustomInput
                                                                    id='total_amount' name='total_amount'
                                                                    formControlProps={{
                                                                        fullWidth: true
                                                                    }} />
                                                            </TableCell>
                                                            <TableCell className={classes.tableCell}>
                                                                <CustomInput
                                                                    id='usage' name='usage'
                                                                    formControlProps={{
                                                                        fullWidth: true
                                                                    }} />
                                                            </TableCell>
                                                            {/* 1회 투약량, 1일 투여횟수, 총량, 용법 셀 끝 */}

                                                            {/* 삭제 버튼 시작 */}
                                                            <TableCell className={classes.tableCell}>
                                                                <Button variant="danger" onClick={() => delMedi(key)}>삭제</Button>
                                                            </TableCell>
                                                            {/* 삭제 버튼 끝 */}

                                                        </TableRow>
                                                    );
                                                })}
                                            </TableBody>
                                            {/* 테이블 바디 끝 */}
                                        </Table>
                                        {/* 처방 의약품 목록 끝 */}
                                    </div>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
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
                                    id="note" name="note"
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
                    {/* 조제시 참고사항 바 끝 */}

                    {/* 처방 버튼 시작 */}
                    <GridItem xs={11} sm={11} md={11} />
                    <GridItem xs={1} sm={1} md={1}>
                        <Link to={'/hospital/writeDescriptionSuccess'}><Button variant="secondary" type="submit">처방</Button></Link>
                    </GridItem>
                    {/* 처방 버튼 끝 */}
                </GridContainer>
            </form>
            {/* 처방전 폼 태그 끝 */}
        </div>
    )
}

export default WirteDescription;