import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

class UpdatePhoto extends React.Component{
    constructor(props){
        super(props);
        this.state={
            coverFile: null,
            profileFile: null,
            currentUserId: this.props.currentUser.id,
        }
        this.editCoverPhoto = this.editCoverPhoto.bind(this);
        this.editProfilePhoto = this.editProfilePhoto.bind(this);
        this.handleCoverFile = this.handleCoverFile.bind(this);
        this.handleProfileFile = this.handleProfileFile.bind(this);    
    }

    handleCoverFile(e){
        this.setState({coverFile: e.currentTarget.files[0]})
    }

    handleProfileFile(e){
        this.setState({profileFile: e.currentTarget.files[0]})
    }


    editCoverPhoto(e){
        e.preventDefault();
        let formData = new FormData();

        formData.append('user[id]', this.state.currentUserId);

        if(this.state.coverFile){
            formData.append('user[cover_picture]', this.state.coverFile)
        }

        this.props.updateUserPhoto(formData);
        this.props.closeModal();
        this.setState({coverFile: null});
    }

    // handleSubmit(e){
    //     e.preventDefault();

    //     const formData = new FormData();

    //     formData.append('post[message]', this.state.message);
    //     formData.append('post[poster_id]', this.state.poster_id);
    //     if(this.state.photoFile)
    //     {
    //         formData.append('post[photo]', this.state.photoFile);
    //     }

    //     this.props.createPost(formData)
    //     .then(this.closeForm)
    //     .then(() => <Redirect to="home"/>)
    // }

    editProfilePhoto(e){
        e.preventDefault();
        let formData = new FormData();

        formData.append('user[id]', this.state.currentUserId);

        if(this.state.profileFile){
            formData.append('user[profile_picture]', this.state.profileFile)
        }

        this.props.updateUserPhoto(formData);
        this.props.closeModal();
        this.setState({profileFile: null});
    }

    render(){
        const {user} = this.props;
        return(
            <div className='update-photos-full'>
                <div className='update-photo-header'>{this.props.type === 'CoverPhoto' ? 'Update Cover Photo' : 'Update Profile Page'}</div>
                <form className='update-photos-form' onSubmit={this.editCoverPhoto}>
                    <label className={this.state.coverFile || this.state.profileFile ? 'update-photos-label' : "update-photos-label-nofiles"}>
                        <input type="file" onChange={this.props.type === 'CoverPhoto' ? this.handleCoverFile : this.handleProfileFile}></input>
                        {this.state.coverFile || this.state.profileFile ? 'Photo Chosen' : 'Choose Photo'}
                    </label>
                    <IoMdCheckmarkCircleOutline className={this.state.coverFile || this.state.profileFile ? 'check' : 'display-none' } />
                </form>
                <div className={this.state.coverFile || this.state.profileFile ? 'update-photos-save' : "update-photos-save-nofiles"} onClick={this.props.type === 'CoverPhoto' ? this.editCoverPhoto : this.editProfilePhoto}>Save</div>
            </div>
        )
    }
}

export default UpdatePhoto;