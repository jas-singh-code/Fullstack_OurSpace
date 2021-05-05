import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { findLike } from '../../reducers/selectors';

class CommentItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            edit: false,
            openModule: false,
            focus: false,
            body: null,
            changeable: this.props.comment.id === this.props.currentUser.id
        }
        this.renderModule = this.renderModule.bind(this);
        this.closeModule = this.closeModule.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleEdited = this.handleEdited.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
        this.didCurrentUserLike = this.didCurrentUserLike.bind(this);
        this.findUserFromLike = this.findUserFromLike.bind(this);
        this.isObjectEmpty = this.isObjectEmpty.bind(this);
    }

    closeModule(e){
        // e.stopPropagation();
        // e.preventDefault();
        if (!this.state.focus){
            this.setState({openModule: false});
        }
    }

    updateBody(){
        return e => this.setState({
            body: e.currentTarget.value
        })
    }

    renderModule(){
        this.setState({openModule: !this.state.openModule});
        document.getElementById(`options-holder-${this.props.comment.id}`).focus();
    }

    handleEdited(){
        const comment = {
            id: this.props.comment.id,
            body: this.state.body
        }
        this.props.editComment(comment);
        this.setState({edit: false})
    }

    /// LIKE FUNCTIONS

    toggleLike(){
        const liked = this.didCurrentUserLike();
        const likeObj = {
            user_id: this.props.currentUser.id,
            likeable_type: "Comment",
            likeable_id: this.props.comment.id
        }
        if (!liked){
            this.props.createLike(likeObj);
        }else{
            const foundLike = findLike(
                this.props.likes, 
                this.props.comment.id, 
                'Comment', 
                this.props.currentUser.id);
            if (foundLike){
                this.props.deleteLike(foundLike.id)
            }
        }
    }

    didCurrentUserLike(){
        const foundLike = findLike(this.props.likes, this.props.comment.id, 'Comment', this.props.currentUser.id);
        return !!foundLike;
    }

    findUserFromLike(userId){
        return this.props.users[userId];
    }

    isObjectEmpty(obj){
        return Object.keys(obj).length === 0;
    }

    render() {
        const {comment, currentUser} = this.props;

        let likesCount = '';

        // if(!this.isObjectEmpty(this.props.comment.likes)){

        // }

        return (
            <div key={comment.id} className="full-comment">
                <img className="profile-pic margin-top" src={comment.author.profilePicture}></img>
                <div className="comment-item">
                    <div className="comment-item-head">
                        <div className="comment-author">{comment.author.firstName}</div>
                        {this.state.edit ?
                        <form onSubmit={this.handleEdited}>
                            <input className="comment-body edit-input" type="text" defaultValue={comment.body} onChange={this.updateBody()}></input>
                            <div className='edit-actions'>
                                <div className="comment-like" onClick={() => this.setState({edit: false})}>Cancle</div>
                                <input type='submit' value="Save"></input>
                            </div>
                        </form>
                        :
                        <div className="comment-body">{comment.body}</div>
                        }
                        {likesCount}
                    </div>
                    <ul className="comment-actions">
                        <li className={this.didCurrentUserLike() ? "comment-like liked-comment" : "comment-like unliked-comment"}
                        onClick={this.toggleLike}
                        >Like</li>
                        <li className="comment-time">{comment.created_at.slice(0, 10)}</li>
                    </ul>
                </div>
                {comment.author_id === this.props.currentUser.id ?
                    <div className="comment-options">
                        < FiMoreHorizontal size="1x"
                        onClick={this.renderModule}
                        tabIndex="0"/>
                    </div>
                    :
                    ""
                }
                <div id={`options-holder-${comment.id}`}
                 className="comment-options-holder"
                 style={this.state.openModule ? {display: "flex"} : {display: "none"}}
                 tabIndex="0"
                 onBlur={() => this.setState({openModule: false})}
                 >
                    <div className="editor" onClick={() => this.setState({edit: true})} >Edit</div>
                    <div className="comment-delete" onClick={() => this.props.deleteComment(comment.id)}>Delete</div>
                </div>
            </div>
        )
    }
}

export default CommentItem;