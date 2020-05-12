import React from "react";
import './Signin.css';

class Signin extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isValid: ""
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    onButtonSubmit = ()=> {
        fetch('https://murmuring-savannah-14342.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                this.setState({isValid: "true"})
                this.props.onSubmit('home');
            } else {
                this.setState({isValid:"Invalid Credentials"});
            }
        })
        
        
    }

    render() {
      
        return (
        <div className="ma2 main bw1 b--white-30 shadow-5 ba pa3  center">
            
            <div className="for tc ">
                <label className="center f1"><strong>Sign In</strong></label>   
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className='f4'><strong>Email address</strong></label>
                    <input 
                        type="email" 
                        className="shadow-5 center form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        onChange={this.onEmailChange} 
                        required   
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='f4'><strong>Password</strong></label>
                    <input 
                        type="password" 
                        className="shadow-5 center form-control" 
                        id="exampleInputPassword1"
                        onChange={this.onPasswordChange}
                        required
                        />
                </div>
                <button onClick={this.onButtonSubmit} type="submit" className=" f5 transparent shadow-5 btn btn-secondary">Sign in</button>
                <p className="tc pa2 yellow">{this.state.isValid}</p>
            </div>
        </div>
            );
    }
}
export default Signin;