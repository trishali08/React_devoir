import React, {Component} from 'react';
class NewForm extends Component{
  state= {
    item: null
  }

  handleChange = (e) => {
    this.setState({
      // name: e.target.value       //earlie we use this
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addTodo(this.state);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
       <label>Item </label>
       <input type="text" id='item' onChange={this.handleChange}/> <br />
       <button> Submit </button>
      </form>
    )
  }
}

export default NewForm;
