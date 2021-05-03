import React from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {FaRegCommentAlt, FaToggleOff} from "react-icons/fa"
import CommentIndexContainer from '../comments/comment_index_container';

class PostItem extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            body: '',
            post_id: null,
            author_id: this.props.currentUser.id,
            liked: false
        });
        this.focusComment = this.focusComment.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
    }

    focusComment(){
        document.getElementById(`comment-input-${this.props.id}`).focus();
    }

    handelSubmit(e){
        // e.preventDefault();
        let comment = Object.assign({}, this.state);
        comment["post_id"] = this.props.post.id;
        this.props.createComment(comment);
        this.setState({
            body: ''
        })
    }

    updateBody(){
        return e => this.setState({
            body: e.currentTarget.value
        })
    }

    toggleLike(){
        this.setState({liked: !this.state.liked});
        if (this.state.liked){
            this.props.sendLike()
        }

    }

    render(){
        const {author, createdAt, message, id, photoURL, post} = this.props;

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
                            <div className="likes-btn" onClick={this.toggleLike}>
                                <AiOutlineLike className="like-icon" size="1g"/>
                                <p className="p-like">Like</p>
                            </div>
                        </span>
                        <span onClick={this.focusComment} tabIndex="0">
                            <div className="comments-btn">
                                <FaRegCommentAlt className="comment-icon" size="1g"/>
                                <p className='p-comment'>Comment</p>
                            </div>
                        </span>
                    </div>
                    <CommentIndexContainer className="comment-index-container" post={post}/>
                    <div className="comment-input-full">
                        <img src={this.props.currentUser.profilePicture} className="profile-pic"></img>
                        <form onSubmit={this.handelSubmit} className="create-comment">
                            <input id={`comment-input-${this.props.id}`}
                             className="comment-input"
                             tabIndex="0"
                             type="text"
                             placeholder="Write a comment..."
                             value={this.state.body}
                             onChange={this.updateBody()}
                             >
                            </input>
                        </form>
                    </div>
                    {/* <CommentContainer className="comment-container" post={post}/> */}

                </li>
            </div>
        )
    }
}

export default PostItem;