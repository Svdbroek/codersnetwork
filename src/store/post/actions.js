// src/store/post/actions.js

import api from "../../api"



export function fetchPost(id) {
    return function thunk(dispatch, getState) {
      api(`/posts/${id}`)
        .then(post => {
          dispatch(setPost(post));
          console.log(post)
        })
    }
  }
  
  export function setPost(post) {
      return {
    type: "ADD_POST",
      payload:{ post: post.content }}
}