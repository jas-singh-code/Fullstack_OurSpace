import React from 'react';
import PostCreateContainer from './post_create_container';
import NavContainer from '../nav/nav_container';

class PostIndex extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="post-nav-create-index">
                <div>
                    {<NavContainer />}
                </div>
                <div className="post-create-cont">
                    {<PostCreateContainer />}
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

