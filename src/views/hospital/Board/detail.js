import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeWriter = this.onChangeWriter.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {
      writer: '',
      title: '',
      content:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/api/board/edit/'+this.props.match.params.id)
          .then(response => {
            console.log(response)
              this.setState({ 
                writer: response.data.writer, 
                title: response.data.title,
                content: response.data.content });
          })
          .catch(function (error) {
              console.log(error);
          })
    }


  onChangeWriter(e) {
    this.setState({
      writer: e.target.value
    });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })  
  }
  onChangeContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      writer: this.state.writer,
      title: this.state.title,
      content: this.state.content
    };
    axios.post('http://localhost:5000/api/board/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/hospital/board');
  }

  delete() {
    axios.delete('http://localhost:5000/api/board/delete/'+this.props.match.params.id)
        .then(function(res) {
          console.log('Deleted')
          window.location.reload();
        })
        .catch(err => console.log(err));
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update post</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Writer:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.writer}
                      onChange={this.onChangeWriter}
                      />
                </div>
                <div className="form-group">
                    <label>Title : </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Content: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.content}
                      onChange={this.onChangeContent}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Board" 
                      className="btn btn-primary"/>
                </div>
                <div className="form-group">
                  <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </div>


                   

            </form>
        </div>
    )
  }
}
