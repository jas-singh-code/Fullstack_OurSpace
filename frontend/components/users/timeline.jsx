import React from 'react';
import Photos from './photos_container'
import About from './about_container';
import UserPosts from './user_posts_container';


class Timeline extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const {user} = this.props;
        return(
            <div className='timeline-full'>
                <div className='timeline-left'>
                    <Photos userId={user.id}/>
                    <About user={user} />
                </div>
                <div className='timeline-right'>
                    <UserPosts userId={user.id}/>
                </div>
            </div>
        )
    }
}

export default Timeline;