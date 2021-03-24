import React from 'react';
import NavContainer from '../nav/nav_container';
import PostItem from "./post_item"
import { IoMdPhotos } from 'react-icons/io';

class PostIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        
        this.props.getAllPosts()
    }

    render() {
        
        const { posts1 } = this.props
        if (!posts1) return null;
        const postItem = Object.values(posts1).map(post => (
            <PostItem 
             key={post.id}
             author = {post.author}
             message={post.message}
             postedOn={post.postedOn}/>
            )
        )
      
        return (
            <div className="post-nav-create-index">
                <div className="nav-bar">
                    {<NavContainer />}
                </div>
                <div className="post-create-container">
                    <div className="post-create-component">
                        <div className="input-pic">
                            <div className="profile-pic">PIC</div>
                            <input id="create-post-uneditable" type="text"  onClick={this.props.openCreatePost} placeholder={`What's on you're mind, ${currentUser.firstName}?`}/>
                        </div>
                        <br/>
                        <div className="add-photo"><IoMdPhotos className="photo-icon1" />Photo</div>
                        
                    </div>
                </div>
                <div className="post-index-cont">
                    <ul className="post-index-ul">
                        {postItem}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostIndex;

