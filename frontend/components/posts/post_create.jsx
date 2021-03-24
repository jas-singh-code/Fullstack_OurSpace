import React from 'react';
import { Redirect } from 'react-router';
import { IoMdPhotos } from 'react-icons/io';

class PostCreate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: '',
        }
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
        if (this.props.errors.length === 0){
            return this.props.closeModal()
        } else {console.log("skipped if")} //only production
    }

    handleSubmit(e){
        e.preventDefault();
        const post = this.state;
        this.props.createPost(post)
        .then(this.closeForm)
        .then(() => <Redirect to="home"/>)
    }

    render () {
        const { currentUser } = this.props
        return (
            <div>
                <form className="create-form" onSubmit={this.handleSubmit}>
                    <h2>Create Post</h2>
                    <input autoFocus placeholder={`What's on you're mind, ${currentUser.firstName}?`} className="create-input" onChange={this.updateMessage()} value={this.state.message}></input>
                    <div className="addd-photo-create"><IoMdPhotos className="photo-icon" />Photo</div>
                    <input className="btn-post" type="submit" value="Post"></input>
                </form>
            </div>
        )
    }
}

export default PostCreate;