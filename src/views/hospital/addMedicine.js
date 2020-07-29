import React, {Component} from 'react';

class Medicine extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

class MedicineContainer extends Component {
    render() {
        return (
            <div>
                {this.props.medicines.map(name => <Medicine name = {name}/>)}
            </div>
        )
    }
}

class Add extends React.Component {

  state = {
    medicines: [
      '감기약',
      '진통제',
      '소화제',
      '비타민',
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.medicines.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


    render(){
      return (
        <div style = {{textAlign: 'center'}}>
          <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name!'/>
          <br></br>
          <h3>These are the important names:</h3>
          <MedicineContainer medicines = {this.dynamicSearch()}/>
        </div>
      );
    }
}

export default Add; 