import React from 'react';

class PostIndex extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="post-index-cont">
                <ul className="post-index-ul">Post index container
                    {/* {this.state.posts.map(post => {
                        <li key={post.id} props={postIndexItemContainer}></li>
                    })} */}
                </ul>
            </div>
        )
    }
}

export default PostIndex;

