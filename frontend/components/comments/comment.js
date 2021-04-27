import React from "react";

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            body: ''
        })
        this.update = this.update.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    handelSubmit(e){
        e.preventDefault();
        if(e.key === 'Enter'){
            this.props.createComment(this.state);
        }
    }

    updatebody(){
        return e => this.setState({
            body: e.currentTarget.value
        })
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handelSubmit} className="create-comment">
                    <img className="profile-pic"></img>
                    <input onChange={this.updatebody} placeholder="Write a comment..." value={this.state.body} onKeyDown={this.handelSubmit}></input>
                </form>
            </div>
        )
    }
}

export default Comment;