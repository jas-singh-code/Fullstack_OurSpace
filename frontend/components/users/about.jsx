import React from 'react';
import {MdWork, MdSchool, MdUpdate} from 'react-icons/md';
import {BsThreeDotsVertical, BsPerson} from 'react-icons/bs';
import {HiOutlineCake} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'
import { editUser } from '../../actions/user_actions';

class About extends React.Component{
    constructor(props){
        super(props);

        this.state={
            editOccup: false,
            editEdu: false,
            editLocat: false,
            editBirth: false,
            editGender: false,
            occupation: '',
            education: '',
            location: '',
            month: '01',
            day: '01',
            year: '2021',
            gender: ''
        }

        this.formatBirthday = this.formatBirthday.bind(this);
        this.update = this.update.bind(this);
        this.handleOccup = this.handleOccup.bind(this);
        this.handleEdu = this.handleEdu.bind(this);
        this.handleLocat = this.handleLocat.bind(this);
        this.handleBirth = this.handleBirth.bind(this);
        this.handleGender = this.handleGender.bind(this);
    }

    formatBirthday(){
        const {birthday} = this.props.user;
        const day = birthday.slice(2, 4);
        let month = birthday.slice(0, 2);
        const year = birthday.slice(4, 8);
        const translateMonths = {
            1: 'Jan',
            2: 'Feb',
            3: 'March',
            4: 'April',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'Aug',
            9: 'Sep',
            10: 'Oct',
            11: 'Nov',
            12: 'Dec',
        };
        month = translateMonths[parseInt(month)];
        return (`${month} ${day}, ${year}`);
    }

    update(attribute){
        return e => this.setState({[attribute]: e.currentTarget.value });
    }

    handleOccup(e){
        e.preventDefault();
        let editedUser ={
            id: this.props.user.id,
            occupation: this.state.occupation
        }

        this.props.editUser(editedUser);
        this.setState({editOccup: false});
    }

    handleEdu(e){
        e.preventDefault();
        let editedUser ={
            id: this.props.user.id,
            education: this.state.education
        };

        this.props.editUser(editedUser);
        this.setState({editEdu: false});
    }

    handleLocat(e){
        e.preventDefault();
        let editedUser ={
            id: this.props.user.id,
            location: this.state.location
        };

        this.props.editUser(editedUser);
        this.setState({editLocat: false});    
    }

    handleBirth(e){
        e.preventDefault();
        let combine = `${this.state.month}${this.state.day}${this.state.year}`
        let editedUser ={
            id: this.props.user.id,
            birthday: combine
        };

        this.props.editUser(editedUser);
        this.setState({editBirth: false});
    }

    handleGender(e){
        e.preventDefault();
        let editedUser ={
            id: this.props.user.id,
            gender: this.state.gender
        };

        this.props.editUser(editedUser);
        this.setState({editGender: false});
    }

    render(){
        const {user} = this.props;
        return(
            <div className='full-about'>About
                <div className='about-rows'>

                    <div className='about-row'>
                        {this.state.editOccup ?
                        <form className='work-edit' onSubmit={this.handleOccup}>
                            <input onChange={this.update('occupation')} defaultValue={user.occupation}>
                            </input>
                            <label>
                                Work
                            </label>
                            <div className='work-edit-actions'>
                                <div onClick={this.handleOccup} className='edit-save'>Save</div>
                                <div onClick={() => this.setState({editOccup: false})} className='edit-cancle'>Cancle</div>
                            </div>

                        </form>
                        :
                        <div className='work-unedited'>
                            <MdWork  className='grey'/>
                            <div className='about-work'>Works at: {user.occupation}</div>
                            <BsThreeDotsVertical className='about-options' onClick={() => this.setState({editOccup: !this.state.editOccup})} />
                        </div>
                        }
                    </div>
                    <div className='about-row'>
                        {this.state.editEdu ?
                        <form className='work-edit' onSubmit={this.handleEdu}>
                            <input onChange={this.update('education')} defaultValue={user.education}>
                            </input>
                            <label>
                                Education
                            </label>
                            <div className='work-edit-actions'>
                                <div onClick={this.handleEdu} className='edit-save'>Save</div>
                                <div onClick={() => this.setState({editEdu: false})} className='edit-cancle'>Cancle</div>
                            </div>

                        </form>
                        :
                        <div className='work-unedited'>
                            <MdSchool className='grey' />
                            <div className='about-education'>Studied at {user.education}</div>
                            <BsThreeDotsVertical className='about-options' onClick={() => this.setState({editEdu: !this.state.editEdu})}/>
                        </div>
                        }
                    </div>
                    <div className='about-row'>
                        {this.state.editLocat ?
                        <form className='work-edit' onSubmit={this.handleLocat}>
                            <input onChange={this.update('location')} defaultValue={user.location}>
                            </input>
                            <label>
                                Location
                            </label>
                            <div className='work-edit-actions'>
                                <div onClick={this.handleLocat} className='edit-save'>Save</div>
                                <div onClick={() => this.setState({editLocat: false})} className='edit-cancle'>Cancle</div>
                            </div>
                        </form>
                        :

                        <div className='work-unedited'>
                            <GoLocation className='grey'/>
                            <div className='about-location'>Lives in {user.location}</div>
                            <BsThreeDotsVertical className='about-options' onClick={() => this.setState({editLocat: !this.state.editLocat})}/>
                        </div>
                        }
                    </div>
                    <div className='about-row'>
                        {this.state.editBirth ?
                        <div className="birthday">
                            <label>Birthday:
                                <select name="dob-day" id="dob-day" onChange={this.update('day')}>
                                    <option value="" disabled>Day</option>
                                    <option value="" disabled>---</option>
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
                                    <option value="" disabled>Month</option>
                                    <option value="" disabled>-----</option>
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
                                    <option value="" disabled>Year</option>
                                    <option value="" disabled>----</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
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
                                    <option value="1920">Very Old</option>
                                    <option value="1919">should'nt even be on fb old</option>
                                </select>
                            </label>
                            <div className='work-edit-actions'>
                                <div onClick={this.handleBirth} className='edit-save'>Save</div>
                                <div onClick={() => this.setState({editBirth: false})} className='edit-cancle'>Cancle</div>
                            </div>                        
                        </div>
                        :                  
                        <div className='work-unedited'>
                            <HiOutlineCake className='grey'/>
                            <div className='about-birthday'>Born on {this.formatBirthday()}</div>
                            <BsThreeDotsVertical className='about-options' onClick={() => this.setState({editBirth: !this.state.editBirth})} />
                        </div>
                        }
                    </div>
                    <div className='about-row'>
                        {this.state.editGender ?
                        <form className='work-edit' onSubmit={this.handleGender}>
                            <input onChange={this.update('gender')} defaultValue={user.gender}>
                            </input>
                            <label>
                                Gender
                            </label>
                            <div className='work-edit-actions'>
                                <div onClick={this.handleGender} className='edit-save'>Save</div>
                                <div onClick={() => this.setState({editGender: false})} className='edit-cancle'>Cancle</div>
                            </div>
                        </form>
                        :
                        <div className='work-unedited'>
                            <BsPerson className='grey'/>
                            <div className='about-gender'>Gender: {user.gender}</div>
                            <BsThreeDotsVertical className='about-options' onClick={() => this.setState({editGender: !this.state.editGender})} />
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default About;