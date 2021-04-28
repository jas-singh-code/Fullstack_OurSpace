import React from 'react';


class CommentIndex extends React.Component{
    constructor(props){
        super(props);

    }

    // componentDidUpdate(){
    //     this.props.fetchPostComments(this.props.post.id)
    // }

    render(){
        const { post } = this.props;
        let allComments = ''
        if (post.comments){
            allComments = (
                post.comments.map(comment => {
                    return(
                    <div>{comment.body}</div>
                    )
                })
            )
        }
        debugger;
        return(
            <div>{allComments}</div>
        )
    }
}

export default CommentIndex;