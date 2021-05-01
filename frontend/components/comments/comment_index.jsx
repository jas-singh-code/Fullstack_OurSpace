import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi'

class CommentIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            edit: null,
            openModule: false
        };
    }

    render(){
        const { post } = this.props;
        let allComments = '';
        if (post.comments){
            allComments = (
                Object.values(post.comments).map(comment => {
                    return(
                        <div key={comment.id} className="full-comment">
                            <img className="profile-pic margin-top" src={this.props.currentUser.profilePicture}></img>
                            <div className="comment-item">
                                <div className="comment-item-head">
                                    <div className="comment-author">{comment.author.firstName}</div>
                                    {this.state.edit ?
                                    <div>
                                        <input type="text" value={comment.body} ></input>
                                        <div>Cancle</div>
                                    </div>
                                    :
                                    <div className="comment-body">{comment.body}</div>
                                    }
                                </div>
                                <ul className="comment-actions">
                                    <li className="comment-like">Like</li>
                                    <li className="comment-time">{comment.created_at.slice(0, 10)}</li>
                                </ul>
                            </div>
                            <div className="comment-options">
                                < FiMoreHorizontal size="1x" onClick={() => this.setState({openModule: true})}/>
                            </div>
                            <div className="comment-options-holder" style={this.state.openModule ? {display: "flex"} : {display: "none"}}>
                               <div className="editor" onClick={() => this.setState({edit: true})}>Edit</div>
                               <div className="comment-delete" onClick={() => this.props.deleteComment(comment.id)}>Delete</div>
                            </div>
                        </div>
                    )
                })
            )
        }
        return(
            <div className="all-comments">{allComments}</div>
        )
    }
}

export default CommentIndex;