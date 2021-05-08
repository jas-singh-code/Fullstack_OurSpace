import React from 'react';

class Photos extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        let photoArr = this.props.photoPosts.length ? 
        this.props.photoPosts.map(photoPost => {
            return (
                <li key={photoPost.id} className='photo-thumb'>
                    <img src={photoPost.photoURL}></img>
                </li>
            )
        }) : [];
        return (
            <div className='Timeline-full'>
                <div>Photos</div>
                <ul className='photo-preview'>
                    {photoArr}
                </ul>
            </div>
        )
    }
}

export default Photos;