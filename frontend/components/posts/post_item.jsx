import React from 'react';
import {AiOutlineLike} from "react-icons/ai";
import {FaRegCommentAlt, FaToggleOff} from "react-icons/fa";
import CommentIndexContainer from '../comments/comment_index_container';
import { findLike } from '../../reducers/selectors';
import { Link } from 'react-router-dom';


class PostItem extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            body: '',
            post_id: null,
            author_id: this.props.currentUser.id,
        });
        // change liked state to reflect if current user is a liker inside post.likes
        this.focusComment = this.focusComment.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
        this.didCurrentUserLike = this.didCurrentUserLike.bind(this);
        this.findUserFromLike = this.findUserFromLike.bind(this);
        this.isObjectEmpty = this.isObjectEmpty.bind(this);
        this.getUserProfilePic = this.getUserProfilePic.bind(this);
        this.getPostedTime = this.getPostedTime.bind(this);
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
    }

    didCurrentUserLike(){
        const foundLike = findLike(this.props.likes, this.props.post.id, 'Post', this.props.currentUser.id);
        return !!foundLike;
    }

    findUserFromLike(userId){
        return this.props.users[userId];
    }

    isObjectEmpty(obj){
        return Object.keys(obj).length === 0;
    }

    getUserProfilePic(userId){
        const user = this.props.users[userId];
        return user.profilePicture;
    }

    getPostedTime(createdAt){
        const dayNumerals = {
            0: "Sun",
            1: "Mon",
            2: "Tues",
            3: "Wed",
            4: "Thurs",
            5: "Fri",
            6: "Sat"
        }

        const monthNumerals = {
            "01": 'January',
            "02": 'February',
            "03": 'March',
            "04": 'April',
            "05": 'May',
            "06": 'June',
            "07": 'July',
            "08": 'August',
            "09": 'September',
            "10": 'October',
            "11": 'November',
            "12": 'December'
        }
        const date = new Date(createdAt);
        const dayNum = date.getDay();
        const createDay = dayNumerals[dayNum];

        const year = createdAt.slice(0, 4);
        const monthNum = createdAt.slice(5, 7);
        const dayDate = createdAt.slice(8, 10);
        const month = monthNumerals[monthNum];

        return `${createDay}, ${month} ${dayDate}`
        // const day = createdAt.slice(8, 10);

        // const dateNow = new Date
        // const curMonth = dateNow.getMonth() + 1;
        // const curYear = dateNow.getFullYear();
        // const curDay = dateNow.getDate();
        // const curHour = dateNow.getHours();
        // const curMin = dateNow.getMinutes();
    }

    render(){
        const {photoURL, post} = this.props;
        const { message, posterId, createdAt } = post;
        const author = this.props.users[post.posterId]

        let postImage;
        if(photoURL){
            postImage = photoURL
        }else{
            postImage = ""
        }

        let profilePic = this.getUserProfilePic(this.props.post.posterId);
        let likers = '';
        let firstLiker = '';
        let secondLiker = '';
        let likeComma = '';
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
            if(likers[1]){
                likeComma = <div className='like-comma'>,  and</div>
                secondLiker = <div className="second-liker">{likers[1]}</div>
            }
            likeText = <div className="likes-display-text"> liked this post</div>
        }
        let additionalLikers;
        if(likers.length > 2){
            if ((likers.length - 2) === 1){
                additionalLikers = `and ${likers.length - 2} other`
            }else{
                additionalLikers = `and ${likers.length - 2} others`
            }
            additionalLikers = <div className='add-likers'>{additionalLikers}</div>;
        }
        return (
            <div className="post-item-div">
                <li className="post-ltem-li">
                    <div className="poster-info">
                        <Link to={`/users/${posterId}`}>
                            <img src={profilePic} className="profile-pic"></img>
                        </Link>
                        <div className='poster-name-create'>
                            <Link to={`/users/${posterId}`}>
                                <span className='poster-name'>{author.firstName}</span>
                            </Link>
                            <span>{this.getPostedTime(createdAt)}</span>
                        </div>
                    </div>
                    <p>{message}</p>
                    <div className={postImage ? "photos" : "display-none"}>
                        <img src={postImage}></img>
                    </div>
                    <div className="likes-display">
                        {likeIcon}
                        {firstLiker}
                        {likeComma}
                        {secondLiker}
                        {additionalLikers}
                        {likeText}
                    </div>
                    <div className='module-holder'>
                        <span>
                            <div className="likes-btn" onClick={this.toggleLike}>
                                <AiOutlineLike 
                                 className={this.didCurrentUserLike() ? "like-icon active-btn" : "like-icon"}
                                 />
                                <p className={this.didCurrentUserLike() ? "active-btn" : "p-like"}>Like</p>
                            </div>
                        </span>
                        <span onClick={this.focusComment} tabIndex="0">
                            <div className="comments-btn">
                                <FaRegCommentAlt className="comment-icon"/>
                                <p className='p-comment'>Comment</p>
                            </div>
                        </span>
                    </div>
                    <CommentIndexContainer className="comment-index-container" post={post}/>
                    <div className="comment-input-full">
                        <img src={this.props.currentUser.profilePicture} className="profile-pic"></img>
                        <form onSubmit={this.handelSubmit} className="create-comment">
                            <input id={`comment-input-${this.props.post.id}`}
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