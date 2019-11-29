import api from '../../api'

export function sendPost(jwt, title, content) {
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
    }).then(data => (console.log(data))
    )
      .catch(err => console.log("err", err));
  };
}