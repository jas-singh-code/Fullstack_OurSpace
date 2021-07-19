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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handleUser2 = this.handleUser2.bind(this);
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

    handleUser2(e){
        e.preventDefault();
        const user = {
            email: 'guest2@ourspace.com',
            password: 'demouser2'
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
        let {errors} = this.props;
        let error = "";
        let error2 = "";
        let sidePass = "";
        let sideEmail = "";
        if(errors[0] && errors[0]["password"]){
            error = <div className="login-pass-err">{"Invalid Password"}</div>
            sidePass = <div className="login-pass-side-err2"></div>
        }else if(errors[0] && errors[0]["email_and_pass"]){
            error = <div className="login-email-err">{errors[0]["email_and_pass"]}</div>;
            error2 = <div className="login-pass-err2">{"Invalid Password"}</div>;
            sidePass = <div className="login-pass-side-err"></div>;
            sideEmail = <div className="login-email-side-err"></div>;
        }
        return(
        <div className="full-container">
            <div className="login-and-logo">
                <div className="login-text">
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
                            style={sideEmail !== "" ? {border:' thin solid red'} : {} }
                            />

                            <input type='password'
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update('password')}
                            className="login-input" 
                            style={sidePass !== "" ? {border:' thin solid red'} : {} }
                            />
                            <br/>
                            <input className="btn-login" type="submit" value="Log In"  />
                        </div>
                    </form>
                    <div className="button-holder">{this.props.signupFormButton}</div>
                    <button className="btn-signup" onClick={this.handleUser}>Demo User 1</button>
                    <button className="btn-signup2 margin" onClick={this.handleUser2}>Demo User 2</button>
                    {error}
                    {error2}
                    {sidePass}
                    {sideEmail}
                </div>
            </div>
            <footer className="login-footer">
                <div className="btn-links">
                    <a target="_blank" href="https://github.com/jas-singh-code">{<FaGithub className='github-icon'/>}</a>
                    <a target="_blank" href="https://www.linkedin.com/in/jaspreet-singh-software-engineer/"><FaLinkedin className='LinkedIn-icon'/></a>
                    <a target="_blank" href="https://jas-singh-code.github.io/" ><BsFillPersonLinesFill className='Personalsite-icon'/></a>
                </div>
                <p> a Jaspreet Singh Production </p>
                <p>TheOurspace <BiCopyright /> 2021</p>
            </footer>
        </div>
        );
    }
};

export default LoginForm;