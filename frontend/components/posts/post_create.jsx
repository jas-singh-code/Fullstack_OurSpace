import React from 'react';

class PostCreate extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.post
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.sendInfo = this.sendInfo.bind(this)
        this.updateMessage = this.updateMessage.bind(this)
        this.closeForm = this.closeForm.bind(this)
    }
    // sendInfo(e){
    //     const input = document.getElementById("create-post-uneditable");
    //     return e => {
    //     input.innerHTML = e.currentTarget.value;
    //     }
    // }

    updateMessage(){
        return e => this.setState({
            message: e.currentTarget.value
        })
    }

    closeForm(){
        // debugger
        if (this.props.errors.length === 0){
            return this.props.closeModal()
        } else {console.log("skipped if")} //only production
    }

    handleSubmit(e){
        e.preventDefault();
        const post = this.state
        this.props.createPost(post)
        .then(this.closeForm)
        .then(() => this.props.history.push("/home"))
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>This is the post create form
                    <input onChange={this.updateMessage()} value={this.state.message}></input>
                    <br/>
                    <div className="add-photo">Add Photo</div>
                    <input className="btn-post" type="submit" value="Post"></input>
                </form>
            </div>
        )
    }
}

export default PostCreate;