import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const UserList = props => {
  return(
    <li> {props.User.Name} {props.User.LastName} </li>
  )
}



class App extends Component {
  constructor() {
    super();

    this.state = {
      User:[
        {
          Name:'jcrodriguezw',
          email:'jcrodriguezw@gmail.com'
        },
        {
          Name: 'Reynagonzalez',
          email: 'reynagonzalezh06@hotmail.com'
        }
      ],
      Username:'',
      Password:''
    
    }

    this.handlechange = this.handlechange.bind(this)
    this.handleclick = this.handleclick.bind(this)
    this.clear = this.clear.bind(this)
  }



  handlechange(e) {
    if(e.target.id == 'input_username' ) {
      
          return(
            this.setState({
              Username:e.target.value
            })
          )
      } else if(e.target.id == 'input_password') {
        return(
          this.setState({
            Password:e.target.value
          })
        )
      }
  }

  handleclick(Username) {
    if(this.state.Username == '' ) {
      return(
        alert('This field is Required'),
       document.getElementById('input_username').className += ' error',
       false
      )
    }  else if(this.state.Password == '') {
      return(
        alert('Password is Required'),
        document.getElementById('input_password').className += ' error',
        false
      )
    } else {
      return(
        alert('Bienvenido ' + this.state.Username)
      )
    }
    
  }

  clear(e) {
    if(e.target.id == 'input_username') {
      return(
        document.getElementById('input_username').className = 'input_username'
      )
    } else if (e.target.id == 'input_password') {
      return(
        document.getElementById('input_password').className = 'input_password'
      )
    }
    
  }

  render() {
    const users = this.state.User.map((User,i) => <UserList key = {i} User={User}/>)
    const valor_name = this.state.User.map((User,i) => User.Name)
    return (
      <div className="App">
        <div className='subcontainer'>
          <div className='title'>
            <h1> Log In and get to work </h1>
            <p> Log In </p>
          </div>
          <input id='input_username' className='input_username' type='text' placeholder='Username or Email' onChange={this.handlechange} onClick={this.clear}  />
          <input id='input_password' className='input_password' type='password' placeholder='Password' onChange={this.handlechange} onClick={this.clear}/>
          <div id='container_check' className='container_check'>
            <input id='input_check' className='input_check' type='checkbox' />
            <label for='input_check'> Remember me </label>
          </div>
          <p><a href='#'> Forgot password? </a></p>
          <button className='btn-login' onClick={this.handleclick}> Log In </button>
          <label for='btn-signup'> Don't have an account? </label>
          <button id='btn-signup' className='btn-signup'> Sign up </button>
        </div>

        {/* <div>
          {users}
          {this.state.Username}
          {this.state.Password}
        </div> */}
      </div>
    );
  }
}

export default App;


