import api from '../../api'


export function fetchComments (postId){
    return function thunk (dispatch, getstate){
        api(`/posts/${postId}/comments`)
  .then(data => dispatch(fetchedComments(data)))
  .catch(err => console.log("err", err));
    }
}

export function fetchedComments(posts){
    return {
        type: "FETCHED_COMMENTS",
        payload: posts
    }
}

export function submitComment (text, postId, jwt){
    return function thunk (dispatch,getstate){
        api(`/posts/${postId}/comments`, {
            method: "POST",
            body: {
              text,
            },
            jwt,
          })
            .then(data => dispatch(commentSubitted(data)))
            .catch(err => console.log("err", err));
          
    }
}

export function commentSubitted(comment){
    return{
        type: "COMMENT_SUBMISION",
        payload:comment,
    }
}