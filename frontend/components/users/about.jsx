import React from 'react';
import {MdWork, MdSchool} from 'react-icons/md';
import {BsThreeDotsVertical, BsPerson} from 'react-icons/bs';
import {HiOutlineCake} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'

class About extends React.Component{
    constructor(props){
        super(props);

        this.formatBirthday = this.formatBirthday.bind(this);
    }

    formatBirthday(){
        const {birthday} = this.props.user;
        const day = birthday.slice(0, 2);
        let month = birthday.slice(2, 4);
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
            0: 'Oct',
            1: 'Nov',
            2: 'Dec',
        }
        month = translateMonths[parseInt(month)];
        return (`${month} ${day}, ${year}`);
    }

    render(){
        const {user} = this.props;
        return(
            <div className='full-about'>About
                <div className='about-rows'>
                    <div className='about-row'>
                        <MdWork  />
                        <div className='about-work'>Works at: {user.occupation}</div>
                        <BsThreeDotsVertical className='about-options' />
                    </div>
                    <div className='about-row'>
                        <MdSchool />
                        <div className='about-education'>Studied at {user.education}</div>
                        <BsThreeDotsVertical className='about-options' />
                    </div>
                    <div className='about-row'>
                        <GoLocation />
                        <div className='about-location'>Lives in {user.location}</div>
                        <BsThreeDotsVertical className='about-options' />
                    </div>
                    <div className='about-row'>
                        <HiOutlineCake />
                        <div className='about-birthday'>Born on {this.formatBirthday()}</div>
                        <BsThreeDotsVertical className='about-options' />
                    </div>
                    <div className='about-row'>
                        <BsPerson />
                        <div className='about-gender'>Gender: {user.gender}</div>
                        <BsThreeDotsVertical className='about-options' />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;