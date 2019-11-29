import api from '../../api'

export function deletePost(jwt, id, push, devID) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}`, {
      method: "DELETE",
      jwt
    }).then(data => {
      if (push) {
        push(`/developer/${devID}`)
      }
    })
      .catch(err => console.log("err", err));
  }
}

export function sendPost(jwt, title, content, push) {
  return function thunk(dispatch, getstate) {
    console.log({
      method: "POST",
      body: {
        title,
        content
      },
      jwt
    })
    api("/posts", {
      method: "POST",
      body: {
        title,
        content
      },
      jwt
    }).then(data => {
      if (push) {
        push('/posts')
      }
      console.log('post with tags', data)
    }
    )
      .catch(err => console.log("err", err));
  };
}