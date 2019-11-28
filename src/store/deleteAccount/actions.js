import api from '../../api'
import {logOut} from '../Login/actions'

export function deleteAccount (id, jwt){
    return function thunk(dispatch,getstate ) {
    api(`/developers/${id}`, {
        method: "DELETE",
        jwt: jwt
      })
        .then(dispatch(logOut()))
        .catch(err => console.log("err", err));

}}

