import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
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
            <h4>Centered Modal</h4>
            <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>닫기</Button>
        </Modal.Footer>
      </Modal>
    );
}

const WirteDescription = () => {
    const data = [
        ['약 이름1'],
        ['약 이름2'],
        ['약 이름3'],
        ['약 이름4'],
        ['약 이름5'],
    ];

    const classes = useStyles();
    const [modalShow, setModalShow] = useState(false);
    const [medicine, setMedicine] = useState(data);

    const addMedi = (data) => {
        data.map((item, idx) => {
            if(item.length > 1) item.pop();
            item.push(<Button variant="danger" onClick={() => delMedi(idx)}>삭제</Button>);
            return item;
        });
    }

    const delMedi = (idx) => {
        data.splice(idx, 1)
        addMedi(data);
        setMedicine(data);
    }

    addMedi(data);

    return (
        <div class="container">
            <form method="get" action="/admin">
                <AddModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                <GridContainer>
                    <GridItem xs={9} sm={9} md={9} />
                    <GridItem xs={3} sm={3} md={3}> 
                        <Button variant="secondary">처방</Button>
                        <Button>약 추가</Button>
                    </GridItem>

                </GridContainer>

                <GridContainer>
                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="success">
                                <h4 className={classes.cardTitleWhite}>환자 정보</h4>
                            </CardHeader>
                            <CardBody>
                                이름 : 홍길동
                            </CardBody>
                        </Card>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader color="info">
                                <h4 className={classes.cardTitleWhite}>병명</h4>
                            </CardHeader>
                            <CardBody>
                                <CustomInput
                                    labelText="disease"
                                    id="disease"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <Card>
                            <CardHeader color="warning">
                                <h4 className={classes.cardTitleWhite}>약 목록</h4>
                            </CardHeader>
                            <CardBody>
                                <Table
                                tableHeaderColor="warning"
                                tableData={medicine}
                                />
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
             
            </form>
        </div>
    )
}

export default WirteDescription;