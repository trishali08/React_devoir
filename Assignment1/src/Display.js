import React, {Component} from 'react';
import './index.css';
require ('react');

class Display extends Component {
  state = {
      name: 'Chris',
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }

  render(){
    console.log(this.props);
    return(
      <div class='box'>
        <h2>This is {this.state.name} and the age is {this.props.age}.</h2>
        <form onSubmit={this.handleSubmit}>
         <input type="text" onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default Display;
