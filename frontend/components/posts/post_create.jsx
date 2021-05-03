import React from 'react';
import { Redirect } from 'react-router';
import { IoMdPhotos } from 'react-icons/io';

class PostCreate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: '',
            photoFile: null,
            poster_id: this.props.currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

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

        const formData = new FormData();

        formData.append('post[message]', this.state.message);
        formData.append('post[poster_id]', this.state.poster_id);
        if(this.state.photoFile)
        {
            formData.append('post[photo]', this.state.photoFile);
        }

        this.props.createPost(formData)
        .then(this.closeForm)
        .then(() => <Redirect to="home"/>)
    }

    handleFile(e){
        this.setState({photoFile: e.currentTarget.files[0]})
    }

    render () {
        const { currentUser } = this.props
        return (
            <div>
                <form className="create-form" onSubmit={this.handleSubmit}>
                    <h2>Create Post</h2>
                    <input autoFocus placeholder={`What's on you're mind, ${currentUser.firstName}?`} className="create-input" onChange={this.updateMessage()} value={this.state.message}></input>
                    <label className="addd-photo-create">
                        <IoMdPhotos className="photo-icon" />
                        <input type="file" onChange={this.handleFile} ></input>
                        Photo
                    </label>
                    <input className="btn-post" type="submit" value="Post"></input>
                </form>
            </div>
        )
    }
}

export default PostCreate;