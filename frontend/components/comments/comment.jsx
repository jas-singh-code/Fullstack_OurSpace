import React from "react";

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            body: '',
            post_id: null,
            author_id: this.props.currentUser.id
        })
        this.updateBody = this.updateBody.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
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
    render () {
        return (
            <div>
                <img src={this.props.currentUser.profilePicture} className="profile-pic"></img>
                <form onSubmit={this.handelSubmit} className="create-comment">
                    <input className="comment-input" 
                     type="text"
                     placeholder="Write a comment..."
                     value={this.state.body}
                     onChange={this.updateBody()}
                     >
                    </input>
                </form>
            </div>
        )
    }
}

export default Comment;