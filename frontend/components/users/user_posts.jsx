import React from 'react';
import { getPostsByAuthor } from '../../reducers/selectors';
import PostItem from '../posts/post_item';

class UserPosts extends React.Component{
    constructor(props){
        super(props);

        this.getPosts = this.getPosts.bind(this);
    }

    getPosts(){
        const {posts, userId} = this.props;
        const postsArr = getPostsByAuthor(posts, userId);
        return postsArr;
    }

    render(){

        const { currentUser, openCreatePost, 
        createLike, deleteLike, createComment,
        deleteComment, fetchComments, users,
        likes} = this.props;
        const authorPosts = this.getPosts()
        const postItem = authorPosts.map(post => (
            <PostItem 
             className="post-index-item"
             key={post.id}
             post={post}
             photoURL= {post.photoURL || ""}
             //  createdAt={post.createdAt.slice(0, 10) || ""}
             //  comments= {post.comments}
             currentUser={currentUser}
             createLike={createLike}
             deleteLike={deleteLike}
             createComment = {createComment}
             deleteComment = {createComment}
             fetchComments={fetchComments}
             users={users}
             likes={likes}
             />
            )
        )
        return(
            <div>
                <div className="author-post-create-container">
                    <div className="author-post-create-component">
                        <div className="input-pic">
                            <img src={currentUser.profilePicture} className="profile-pic"></img>
                            <input id="create-post-uneditable" type="text"  onClick={openCreatePost} placeholder={`What's on you're mind, ${currentUser.firstName}?`}/>
                        </div>
                    </div>
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

export default UserPosts;