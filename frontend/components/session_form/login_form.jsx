import React from 'react';
import { BiCopyright } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs"

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUser = this.handleUser.bind(this)
    };

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleUser(e){
        e.preventDefault();
        const user = {
            email: 'guest@ourspace.com',
            password: 'demouser'
        }
        this.props.processForm(user);
    }

    renderErrors(){
        const {errors} = this.props
        // if (errors.length > 0){
        //     if (errors.includes())
        // }
    }

    render () {
        const {errors} = this.props;  
        return(
        <div className="full-container">
            <div className="login-and-logo">
                <div className="login-text">
                    {/* <img className="logo-icon" src={logoiconURL}></img> */}
                    <h2>Ourspace</h2>
                    <h4 className="login-title">Connect with friends and the world around you on Ourspace.</h4>
                </div>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <br/>
                        <div className="login-form-div">
                            <br />
                            <input type='text'
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.update('email')}
                            className="login-input" 
                            // style={emailErr ? {border:' thin solid red'} : {} }
                            />

                            <input type='password'
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update('password')}
                            className="login-input" 
                            // style={passErr ? {border:' thin solid red'} : {} }
                            />
                            <br/>
                            <input className="btn-login" type="submit" value="Log In"  />
                        </div>
                    </form>
                    <div className="button-holder">{this.props.signupFormButton}</div>
                    <button className="btn-signup" onClick={this.handleUser}>Demo User</button>
                </div>
            </div>
            <footer className="login-footer">
                <div className="btn-links">
                    <div>{<FaGithub size="1g"/>}</div>
                    <div><FaLinkedin size="1g"/></div>
                    <div><BsFillPersonLinesFill size="1g"/></div>
                </div>
                <p> a Jaspreet Singh Production </p>
                <p>TheOurspace <BiCopyright /> 2021</p>
            </footer>
        </div>
        );
    }
};

export default LoginForm;