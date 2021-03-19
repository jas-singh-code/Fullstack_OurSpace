import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    }

    render () {
        return(
        <div className="full-container">
            <img className="logo-icon" src={logoiconURL}></img>
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <br/>
                    {this.renderErrors()}
                    <div className="login-form-div">
                        <br />
                        <input type='text'
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.update('email')}
                        className="login-input" />
                        <input type='text'
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                        className="login-input" />
                        <br/>
                        <input className="btn-login" type="submit" value="Log In"  />
                    </div>
                </form>
                <div className="button-holder">{this.props.signupFormButton}</div>
            </div>
        </div>
        );
    }
};

export default LoginForm;