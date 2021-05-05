import React from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {FaRegCommentAlt, FaToggleOff} from "react-icons/fa"
import CommentIndexContainer from '../comments/comment_index_container';
import { findLike } from '../../reducers/selectors'

class PostItem extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            body: '',
            post_id: null,
            author_id: this.props.currentUser.id,
            liked: false,
        });
        // change liked state to reflect if current user is a liker inside post.likes
        this.focusComment = this.focusComment.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
        this.didCurrentUserLike = this.didCurrentUserLike.bind(this);
        this.findUserFromLike = this.findUserFromLike.bind(this);
        this.isObjectEmpty = this.isObjectEmpty.bind(this);
    }

    focusComment(){
        document.getElementById(`comment-input-${this.props.post.id}`).focus();
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
        const liked = this.didCurrentUserLike();
        const likeObj = {
            user_id: this.props.currentUser.id,
            likeable_type: "Post",
            likeable_id: this.props.post.id
        }
        if (!liked){
            this.props.createLike(likeObj);
        }else{

            const foundLike = findLike(this.props.likes, this.props.post.id, 'Post', this.props.currentUser.id);
            if (foundLike){
                this.props.deleteLike(foundLike.id)
            }
        }
        this.setState({liked: !this.state.liked});
    }

    didCurrentUserLike(){
        const foundLike = findLike(this.props.likes, this.props.post.id, 'Post', this.props.currentUser.id);
        return !!foundLike;
    }

    findUserFromLike(userId){
        return this.props.users[userId];
    }

    componentDidMount(){
        // debugger;
        const id = this.props.id;
        if (this.props.post.likes){
            Object.values(this.props.post.likes).forEach(likeObj => {
                if (likeObj.likeable_type === 'Post' && likeObj.likeable_id === id){
                    this.setState({liked: true})
                }
            })
        }
    }

    isObjectEmpty(obj){
        return Object.keys(obj).length === 0;
    }


    render(){
        const {createdAt, photoURL, post} = this.props;
        const { author, message } = post;

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
        let likers = '';
        let firstLiker = '';
        let secondLiker = '';
        let likeText = '';
        let likeIcon = '';
        if(!this.isObjectEmpty(this.props.post.likes)){
            likeIcon = <img src={like_button_icon} ></img>;
            likers = [];
            likers = Object.values(this.props.post.likes).map(like => {
                const user = this.findUserFromLike(like.user_id);
                return(
                    <div className= "each-liker">{user.firstName} {user.lastName} </div>
                )
            })
            firstLiker = <div className="first-liker">{likers[0]}</div>
            secondLiker = <div className="second-liker">, {likers[1]} </div>
            likeText = <div className="likes-display-text">liked this post</div>
        }
        let additionalLikers;
        if(likers.length > 2){
            additionalLikers = (likers.length - 2)
            additionalLikers = <div className='add-likers'>{additionalLikers}</div>;
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
                    <div className="likes-display">
                        {likeIcon}
                        {firstLiker}
                        {secondLiker}
                        {additionalLikers}
                        {likeText}
                    </div>
                    <div className='module-holder'>
                        <span>
                            <div className="likes-btn" onClick={this.toggleLike}>
                                <AiOutlineLike 
                                 className={this.didCurrentUserLike() ? "like-icon active-btn" : "like-icon"}
                                 size="1g"
                                 />
                                <p className={ this.didCurrentUserLike() ? "p-like active-btn" : "p-like" }>Like</p>
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