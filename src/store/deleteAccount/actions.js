import api from '../../api'

export function deleteAccount (id, jwt){
    return function thunk(dispatch,getstate ) {
    api(`/developers/${id}`, {
        method: "DELETE",
        jwt: jwt
      })
        .then(data => console.log("data", data))
        .catch(err => console.log("err", err));

}}