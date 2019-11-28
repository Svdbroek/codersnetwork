import api from '../../api'

export function getProfile (userId){
    return function thunk(dispatch, getstate) {api(`/developers/${userId}`)
  .then(data => dispatch(foundProfile(data)))
  .catch(err => console.log("err", err));}

}

export function foundProfile(profile){
    return{
        type:'FETCHED_PROFILE',
        payload: profile
    }
}