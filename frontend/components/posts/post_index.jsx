import React from 'react';
import PostCreateContainer from './post_create_container';
import NavContainer from '../nav/nav_container';

class PostIndex extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        const {currentUser} = this.props
        return (
            <div className="post-nav-create-index">
                <div>
                    {<NavContainer />}
                </div>
                <div className="post-create-cont">
                    <input id="create-post-uneditable" type="text"  onClick={this.props.openCreatePost} placeholder={`What's on you're mind, ${currentUser.firstName}`}/>
                    <br/>
                    <div className="add-photo">Photo</div>
                </div>
                <div className="post-index-cont">
                    <ul className="post-index-ul">Post index container
                        {/* {this.state.posts.map(post => {
                            <li key={post.id} props={postIndexItemContainer}></li>
                        })} */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostIndex;

