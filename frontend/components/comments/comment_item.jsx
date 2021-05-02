import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

class CommentItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            edit: false,
            openModule: false,
            focus: false,
            body: null
        }
        this.renderModule = this.renderModule.bind(this);
        this.closeModule = this.closeModule.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleEdited = this.handleEdited.bind(this);
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

    render() {
        const {comment, currentUser} = this.props;
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
                    </div>
                    <ul className="comment-actions">
                        <li className="comment-like">Like</li>
                        <li className="comment-time">{comment.created_at.slice(0, 10)}</li>
                    </ul>
                </div>
                <div className="comment-options">
                    < FiMoreHorizontal size="1x"
                     onClick={this.renderModule}
                     tabIndex="0"/>
                </div>
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