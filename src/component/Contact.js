import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	  }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"https://immense-mountain-06199.herokuapp.com/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }

render() {
 return(
    <div className="App">
      
      
      <br/>
      <br/>
      
      <div className="formcss">
      <div className="col-md-8 m-auto">
      <br/>
      <h1>Contactez moi !</h1>
      
      <br/>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          
          <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" minLength="10" maxLength="500" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <br/>
          <button type="submit" className="btn btn-primary justify-content-center d-flex w-100">Envoyer</button>

        </form>
      </div>
      </div>
    </div>
 );
}

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}

export default Contact