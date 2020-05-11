import React from "react";
import './Register.css';

class Register extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onNameCange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
   
    onButtonSubmit = ()=> {
        fetch('https://murmuring-savannah-14342.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user);
                this.props.onSubmit('home');
            }
        })
        
        
    }
    render() {
        return (
            <div className="ma2 main2 bw1 b--white-30 shadow-5 ba pa3  center">
                
                <div className="for tc ">
                    <label className="center f1"><strong>Register</strong></label>   
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className='f4'><strong>Name</strong></label>
                        <input 
                        type="text" 
                        className="shadow-5 center form-control"  
                        aria-describedby="emailHelp"
                        onChange= {this.onNameCange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className='f4'><strong>Email address</strong></label>
                        <input 
                        type="email" 
                        className="shadow-5 center form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className='f4'><strong>Password</strong></label>
                        <input 
                        type="password" 
                        className="shadow-5 center form-control" 
                        id="exampleInputPassword1"
                        onChange={this.onPasswordChange}
                        />
                    </div>
                    <button onClick={this.onButtonSubmit} type="submit" className=" f5 transparent shadow-5 btn btn-secondary">Register</button>
                
                </div>
            </div>
            );
        }        
}
export default Register;