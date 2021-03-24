import React from 'react';
import NavContainer from '../nav/nav_container';
import PostItem from "./post_item"

class PostIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        
        this.props.getAllPosts()
    }

    render() {
        
        const { posts1 } = this.props
        if (!posts1) return null;
        const postItem = Object.values(posts1).map(post => (
            <PostItem 
             key={post.id}
             author = {post.author}
             message={post.message}
             postedOn={post.postedOn}/>
            )
        )
      
        return (
            <div className="post-nav-create-index">
                <div>
                    {<NavContainer />}
                </div>
                <div className="post-create-cont">
                    <input id="create-post-uneditable" type="text"  onClick={this.props.openCreatePost} placeholder={`What's on you're mind, ${currentUser.firstName}`}/>
                    <br/>
                    <div className="add-photo">Photo</div>
                </div>
                <div className="post-index-cont">
                    <ul className="post-index-ul">
                        {postItem}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostIndex;

