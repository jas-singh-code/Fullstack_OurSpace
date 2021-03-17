import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            username: '',
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
            <div>
                <form>Welcome to OurSpace!
                    <br/>
                    {this.renderErrors()}
                    <div>
                        <br />
                        <label>Username:
                            <input type='text'
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input" />
                        </label>
                        <label>Password:
                            <input type='text'
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input" />
                        </label>
                        <br/>
                        <input className="btn-login" type="submit" value="Log In" />
                    </div>
                    <div>{this.props.signupFormButton}</div>
                </form>
            </div>
        );
    }
};

export default LoginForm;