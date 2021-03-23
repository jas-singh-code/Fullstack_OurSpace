import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            gender: '',
            month: '',
            day: '',
            year: '',
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
        const stateShape = {
            first_name: this.state.first_name ,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            birthday: `${this.state.month}${this.state.day}${this.state.year}`
        }
        // debugger
        const user = stateShape;
        this.props.processForm(user)
        .then(setTimeout(() => this.props.closeModal(), 1000))
         .then(() => this.props.history.push('/home'))
    }

    render () {
        // debugger
        // const addClass = document.getElementsByClassName("fname-err").classList.add('err-render');
        const errTriangleFname = this.props.errors.first_name != undefined ? <div className="side-err-fname"></div> : '';
        const errTriangleLname = this.props.errors.last_name != undefined ? <div className="side-err-lname"></div> : '';
        const errTrianglePass = this.props.errors.password != undefined ? <div className="side-err-pass"></div> : '';
        const errTriangleEmail = this.props.errors.email != undefined ? <div className="side-err-email"></div> : '';
        const errTriangleGender = this.props.errors.gender != undefined ? <div className="side-err-gender"></div> : '';
        const errTrianglebday = this.props.errors.birthday != undefined ? <div className="side-err-bday"></div> : '';
        
        const firstNameError = this.props.errors.first_name != undefined ? <div className="fname-err"> {"First Name " + this.props.errors.first_name[0]}</div> : '' ;
        const lastNameError = this.props.errors.last_name != undefined ? <div className="lname-err"> {"Last Name " + this.props.errors.last_name[0]} </div> : '' ;
        const emailError = this.props.errors.email != undefined ? <div className="email-err">{"Email input " + this.props.errors.email[0]}</div> : '' ;
        const passwordError = this.props.errors.password != undefined ? <div className="pass-err">{"Password " + this.props.errors.password[0]}</div> : '' ;
        const genderError = this.props.errors.gender != undefined ? <div className="gender-err">{"Gender " + this.props.errors.gender[0]}</div> : '' ;
        const birthdayError = this.props.errors.birthday != undefined ? <div className="birthday-err">{"Birthday " + this.props.errors.birthday[0]}</div> : '' ;
        return(
            <div>
                <form  className="signup-form-container" onSubmit={this.handleSubmit}>
                    <div className="signup-header">
                        <div className="signup-div1">Sign Up</div>
                        <div className="signup-div2">It's quick and easy.</div>
                    </div>
                    <div>
                        <br />
                        <input type='text'
                        onChange={this.update('first_name')}
                        value={this.state.first_name}
                        placeholder="First Name"
                        className="login-input" />

                        {errTriangleFname}
                        {firstNameError}

                        <input type='text'
                        onChange={this.update('last_name')}
                        value={this.state.last_name}
                        placeholder="Last Name"
                        className="login-input" />

                        {errTriangleLname}
                        {lastNameError}

                        <input type='text'
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.update('email')}
                        className="login-input" />
                        
                        {errTriangleEmail}
                        {emailError}

                        <input type='password'
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                        className="login-input" />

                        {errTrianglePass}
                        {passwordError}

                        <div className="birthday">
                            <label>Birthday:
                                <select name="dob-day" id="dob-day" onChange={this.update('day')}>
                                    <option value="">Day</option>
                                    <option value="">---</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <select name="dob-month" id="dob-month" onChange={this.update('month')}>
                                    <option value="">Month</option>
                                    <option value="">-----</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select name="dob-year" id="dob-year" onChange={this.update('year')}>
                                    <option value="">Year</option>
                                    <option value="">----</option>
                                    <option value="2021">2012</option>
                                    <option value="2020">2012</option>
                                    <option value="2019">2012</option>
                                    <option value="2018">2012</option>
                                    <option value="2017">2012</option>
                                    <option value="2016">2012</option>
                                    <option value="2015">2012</option>
                                    <option value="2014">2012</option>
                                    <option value="2013">2012</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1955">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                    <option value="1939">1939</option>
                                    <option value="1938">1938</option>
                                    <option value="1937">1937</option>
                                    <option value="1936">1936</option>
                                    <option value="1935">1935</option>
                                    <option value="1934">1934</option>
                                    <option value="1933">1933</option>
                                    <option value="1932">1932</option>
                                    <option value="1931">1931</option>
                                    <option value="1930">1930</option>
                                    <option value="1929">1929</option>
                                    <option value="1928">1928</option>
                                    <option value="1927">1927</option>
                                    <option value="1926">1926</option>
                                    <option value="1925">1925</option>
                                    <option value="1924">1924</option>
                                    <option value="1923">1923</option>
                                    <option value="1922">1922</option>
                                    <option value="1921">1921</option>
                                </select>
                            </label>
                            {errTrianglebday}
                            {birthdayError}
                        </div>
                        <div className="gender">
                            <label>Gender:
                                <select id="gender" onChange={this.update('gender')}>
                                    <option value="">Gender</option>
                                    <option value="">---</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="trans">Trans</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
\                            
                            {errTriangleGender}
                            {genderError}
                            <br/>
                        </div>
                        <div id="btn-signup">
                            <input className="btn-signup" type="submit" value="Sign Up" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default SignupForm;