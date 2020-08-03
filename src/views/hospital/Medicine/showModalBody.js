import React, {Component} from 'react';
import axios from "axios";
import styled from 'styled-components';

const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`

class Medicine extends Component {
    render() {
        return (
          <HoverText onClick={() => alert(this.props.name)}>
                {this.props.name}
            </HoverText>
        )
    }
}

class MedicineContainer extends Component {
    render() {
        return (          
            <div id="medicineNames">
                {this.props.medicines.map(name => <Medicine name = {name}/>)}
            </div>
        )
    }
}

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
         
          
          <MedicineContainer medicines = {this.dynamicSearch(this.state.keyword)}/>
        </div>
      );
    }
}

export default ShowModalBody; 