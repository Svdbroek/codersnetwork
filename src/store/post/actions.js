// src/store/post/actions.js

import api from "../../api"



export function fetchPost(id) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}`)
      .then(post => {
        console.log(post)
      })
  }
}

export function fetchAllPosts() {
  return function thunk(dispatch, getState) {
    api(`/posts?limit=99999`)
      .then(posts => {
        dispatch(savePosts(posts))
        console.log('from fetch all Posts', posts)
      })
  }
}

export function fetchRangeOfPosts(queryString) {
  return function thunk(dispatch, getState) {
    api(`/posts${queryString}`)
      .then(posts => {
        dispatch(savePosts(posts))
        console.log('from fetch range of Posts', posts)
      })
  }
}

export function savePosts(posts) {
  return {
    type: "SAVE_POSTS",
    payload: posts
  }
}

// export function setPost(post) {
//   return {
//     type: "ADD_POST",
//     payload: { post: post.content }
//   }
// }