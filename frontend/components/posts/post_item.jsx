import React from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {FaRegCommentAlt, FaToggleOff} from "react-icons/fa"
import CommentContainer from '../comments/comment_container';

class PostItem extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            body: '',
            post_id: this.props.id,
            author_id: this.props.currentUser.id
        })
        this.update = this.update.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e){
        // e.preventDefault(); blocks user input
        if(e.key === 'Enter'){
            let comment = {
                body: this.state.body,
                post_id: this.state.post_id,
                author_id: this.state.author_id
            }
            this.props.createComment(comment);
        }
    }
    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }
    // componentDidUpdate(){
        // need to update postItems comment 
    // }
    render(){
        const {author, comments, createdAt, message, id, photoURL} = this.props;

        let postImage;
        if(photoURL){
            postImage = photoURL
        }else{
            postImage = ""
        }

        let profilePic;
        if (author.profilePicutre){
            profilePic = author.profilePicture
        }else{
            if (author.gender === "male"){
                profilePic = def_pic_man
            }else{
                profilePic = def_pic_woman
            }
        }
        
        let postComments ="";
        if (comments){
            console.log("comments", comments);
            postComments = Object.values(comments).map(commentObj => {
                return(
                    postComments =(
                        <div>{commentObj.body}</div>
                    )
                )
            })
        }
        return (
            <div className="post-item-div">
                <li className="post-ltem-li">
                    <div className="poster-info">
                        <img src={profilePic} className="profile-pic"></img>
                        <div className='poster-name-create'>
                            <span className='poster-name'>{author.first_name}</span>
                            <span>{createdAt}</span>
                        </div>
                    </div>
                    <p>{message}</p>
                    <div className="photos">
                        <img src={postImage}></img>
                    </div>
                    <div className='module-holder'>
                        <span>
                            <div className="likes-btn" onClick={() => toggle('like')}>
                                <AiOutlineLike className="like-icon" size=""/>
                                <p className="p-like">Like</p>
                            </div>
                        </span>
                        <span>
                            <div className="comments-btn">
                                <FaRegCommentAlt className="comment-icon" size=""/>
                                <p className='p-comment'>Comment</p>
                            </div>
                        </span>
                    </div>
                </li>
                {postComments}
                <div>
                    <form onSubmit={this.handleInput} className="create-comment">
                        <img src={this.props.currentUser.profilePicture} className="profile-pic"></img>
                        <input type="text" placeholder="Write a comment..." onKeyDown={this.handleInput} onChange={this.update("body")}></input>
                    </form>
                </div>
                {/* <CommentContainer/> */}
            </div>
        )
    }
}

export default PostItem;