import api from "../../api";


// A thunk creator
export function login(email, password, push) {
  // Return the thunk itself, i.e. a function
  console.log(email, "email", "password", password);
  return function thunk(dispatch, getState) {
    console.log("thunk");
    api("/login", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => (dispatch(saveAccessToken(data)),
        api("/me", { jwt: data.jwt }))
        .then(data => {
          dispatch(userLoggedIn(data))
          if (push) {
            push('/')
          }
        })
        .catch(err => console.log("err", err))
      )
      .catch(err => console.log("err", err));
  };
}


export function updateUserData(profile){
  return {
    type: "UPDATING_DATA",
    payload: profile

  }
}

export function userLoggedIn(profile) {
  return {
    type: "auth/USER_LOGGED_IN",
    payload: profile
  }
}

// An action creator
export function saveAccessToken(accessToken) {
  console.log('saving token')
  return {
    type: "auth/SAVE_ACCESS_TOKEN",
    payload: accessToken
  };
}

export function logOut() {
  return {
    type: 'auth/LOG_OUT'
  }
}