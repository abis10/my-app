import React, { Component } from 'react' 
class FormList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          name:'',
          age:'',
          gender:'',
          occupation:'',
      };
    
     this.handleSubmit = this.handleSubmit.bind(this);
    }
    //  // this.handleRecord = this.handleRecord.bind(this);
    // }
  
    handleSubmit(event) {
    //   event.preventDefault();
      const data = new FormData(event.target);

    }
    handleRecord = (event)=> {
        alert("Name:" + this.state.name  +  "-Age" + this.state.age + "-Gender:" + this.state.gender + "-Occupation:" + this.state.occupation);
        event.preventDefault();
      }
    
      handleNameChange= (event) => {
        this.setState({name: event.target.value});
      }
      handleAgeChange= (event) => {
        this.setState({age: event.target.value});
      }
      handleGenderChange= (event) => {
        this.setState({gender: event.target.value});
      }
      handleOccupationChange= (event) => {
        this.setState({occupation: event.target.value});
      };
    
    render() {
      return (
        <form handleSubmit ={this.handleSubmit}>
            <h1>PLEASE FILL UP THE FORM</h1>
            <label>
            Name:
             <input type="text" value={this.state.name} onChange={this.handleNameChange} /><br/>
             
            Age:
             <input type="text" value={this.state.age} onChange={this.handleAgeChange} type = "number"/><br/>
            
            Gender:
             <input type="text" value={this.state.gender} onChange={this.handleGenderChange} /><br/>
            
            Occupation:
             <input type="text" value={this.state.occupation} onChange={this.handleOccupationChange} /><br/>
  
  </label>
  <button>Submit</button> <br/>
 <button type = "record" value = "record" onClick = {this.handleRecord}> Show Record </button>
          
        </form>
      );
    }
}
  export default FormList;