import React, {Component} from 'react';
import axios from "axios";
import styled from 'styled-components';
import { Modal, Button } from "react-bootstrap";

const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`
//Medicine
const Medicine = (props) => {
  
  const useConfirm = (message, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }
  
    const confirmAction = () => {
      //확인을 누를 경우
      if (window.confirm(message)) {
        onConfirm();
      } //취소를 누를 경우
      else {
        onCancel();
      }
    };
  
    return confirmAction;
  };
  const addConfirm = () => {
    props.onHide()
    console.log("승현",props.name)
    //props.onHide;

  };
  const cancelConfirm = () => console.log("취소했습니다.");
  //onClick 액션 발동시 발생하는 함수 선언
  const message = props.name+"\n추가하시겠습니까?";

   const insertConfirm = useConfirm(
   message,addConfirm,cancelConfirm
   );
   //컴포넌트 리턴  
        return (
          <HoverText onClick={insertConfirm}>
                {props.name}
          </HoverText>
        )
    
};
//MedicineContainer
class MedicineContainer extends Component {
  constructor(props) {
    super(props);
    
}
    render() {
        return (          
            <div id="medicineNames">
                {this.props.medicines.map(name => <Medicine name = {name} onHide={this.props.onHide}/>)}
            </div>
        )
    }
}

//ShowModalBody
class ShowModalBody extends React.Component {


  state = {
    medicines: [],
    keyword: ''
  }

  
//입력한 값에 따라 실시간으로 변하는 목록 
  dynamicSearch = (searchText) => {
    console.log("++searchText",searchText)
    axios
    .get("/api/medicine/getNames", {
      params: {
        searchText,
      },
    })
    .then((res) => {
      console.log(res.data);
      this.state.medicines = [...res.data];
    });
    return this.state.medicines.filter(name => name.toLowerCase().includes(this.state.keyword.toLowerCase()))
  }
//입력받은 값으로 keyword 값 실시간 변경
  changeKeyword = (e) => {
    this.setState({keyword: e.target.value})
    //console.log("++this.state.keyword:",this.state.keyword)
  }

    render(){
      return (
        <div style = {{textAlign: 'center'}}>

          <h4>처방에 필요한 의약품 명을 입력해 주세요.</h4>
          <br></br>

          <input type= 'text' value = {this.state.keyword} onChange = {this.changeKeyword} placeholder = 'ex)마데카솔연고'/>      
         
          <MedicineContainer medicines = {this.dynamicSearch(this.state.keyword)} onHide={this.props.onHide}/>

        </div>
      );
    }
}



//모달 창 AddModal
const AddModal = (props) => {
    
  //this.handleFormSubmit = this.handleFormSubmit.bind(this)

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        {/* 모달 헤더 */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">의약품 추가</Modal.Title>
      </Modal.Header>
      {/* 모달 바디 */}
      <Modal.Body>
        <ShowModalBody onHide={props.onHide}/>
      </Modal.Body>
      {/* 모달 푸터 */}
      <Modal.Footer>
        <h6>해당되는 의약품을 클릭하여 주세요.</h6>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal; 