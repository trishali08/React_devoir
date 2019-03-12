import React, {Component} from 'react';
class AddInfo extends Component{
  state= {
    name: null,
    age: null,
    contact: null,
    address: null,
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addInfo(this.state);
    this.setState({
      name: '',
      age: '',
      contact: '',
      address: ''
    })
  }

  render(){
    return(
      <div className="container">
      <div className="row">
      <div className="col s12">
      <form onSubmit={this.handleSubmit}>
       <label>Name</label>
       <input type="text" id='name' value={this.state.name} onChange={this.handleChange}/> <br />
       <label>Age</label>
       <input type="text" id='age' value={this.state.age} onChange={this.handleChange}/> <br />
       <label>Mobile Number</label>
       <input type="text" id='contact' value={this.state.contact} onChange={this.handleChange}/> <br />
       <label>Address</label>
       <textarea type="text" id="address" className="materialize-textarea" value={this.state.address} onChange={this.handleChange}/>
       <button class="btn waves-effect waves-light"  type="submit" name="action"> Submit
          <i class="material-icons right"></i>
       </button>
      </form>
      </div>
      </div>
      </div>
    )
  }
}

export default AddInfo;
