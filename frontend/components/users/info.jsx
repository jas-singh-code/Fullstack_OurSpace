import React from 'react';
import {MdWork, MdSchool, MdUpdate} from 'react-icons/md';
import {BsThreeDotsVertical, BsPerson} from 'react-icons/bs';
import {HiOutlineCake} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'

class Info extends React.Component{
    constructor(props){
        super(props);

        this.formatBirthday = this.formatBirthday.bind(this);
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

    render(){
        const {user} = this.props;
        return(
            <div className='full-about'>Intro
                <div className='about-rows'>
                    <div className='about-row'>
                        <div className='work-unedited'>
                            <MdWork  className='grey'/>
                            <div className='about-work'>Works at:  {user.occupation}</div>
                        </div>
                    </div>
                    <div className='about-row'>
                        <div className='work-unedited'>
                            <MdSchool className='grey'/>
                            <div className='about-education'>Studied at {user.education}</div>
                        </div>
                    </div>
                    <div className='about-row'>
                        <div className='work-unedited'>
                            <GoLocation className='grey'/>
                            <div className='about-location'>Lives in {user.location}</div>
                        </div>
                    </div>
                    <div className='about-row'>
                        <div className='work-unedited'>
                            <HiOutlineCake className='grey'/>
                            <div className='about-birthday'>Born on {this.formatBirthday()}</div>
                        </div>
                    </div>
                    <div className='about-row'>
                        <div className='work-unedited'>
                            <BsPerson className='grey'/> 
                            <div className='about-gender'>Gender:  {user.gender}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;