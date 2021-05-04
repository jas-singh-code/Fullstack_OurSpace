import React from 'react';
import NavContainer from '../nav/nav_container';
import PostItem from "./post_item"
import { IoMdPhotos } from 'react-icons/io';

class PostIndex extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            postFile: null,
        }
    }

    componentDidMount() {
        this.props.getAllPosts()
    }

    render() {
        const { currentUser } = this.props;
        const { posts } = this.props;
        if (!posts) return null;
        const postItem = Object.values(posts).map(post => (
            <PostItem 
             key={post.id}
             post={post}
             id={post.id}
             currentUser={this.props.currentUser}
             author= {post.author}
             message={post.message}
             photoURL= {post.photoURL || ""}
            //  createdAt={post.createdAt.slice(0, 10) || ""}
             createLike={this.props.createLike}
             className="post-index-item"
            //  comments= {post.comments}
             createComment = {this.props.createComment}
             deleteComment = {this.props.createComment}
             fetchComments={this.props.fetchComments}/>
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
                            <img src={currentUser.profilePicture} className="profile-pic"></img>
                            <input id="create-post-uneditable" type="text"  onClick={this.props.openCreatePost} placeholder={`What's on you're mind, ${currentUser.firstName}?`}/>
                        </div>
                        <label className="add-photo" onClick={this.props.openCreatePost}>
                            <IoMdPhotos className="photo-icon1"/>
                            Photo
                        </label>
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

