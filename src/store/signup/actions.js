import api from '../../api'
import {saveAccessToken} from "../Login/actions"
import {userLoggedIn} from "../Login/actions"

export function signup (mail, id, pw) {
    return function thunk (dispatch, getstate){
        api("/signup", {
            method: "POST",
            body: {
              name: id,
              email: mail,
              password: pw
            }
          }).then(data =>( console.log(data), dispatch(saveAccessToken(data)),
          api("/me", { jwt: data.jwt }))
            .then(data => dispatch(userLoggedIn(data)))
            .catch(err => console.log("err", err))
        )
        .catch(err => console.log("err", err));
    };
  }
            