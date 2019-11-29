import api from "../../api";
import { updateUserData } from "../Login/actions";
export function getProfile(userId) {
  return function thunk(dispatch, getstate) {
    api(`/developers/${userId}`)
      .then(data => dispatch(foundProfile(data)))
      .catch(err => console.log("err", err));
  };
}

export function foundProfile(profile) {
  return {
    type: "FETCHED_PROFILE",
    payload: profile
  };
}

export function updateProfile(
  name,
  intro,
  github,
  website,
  technologies,
  userId,
  jwt
) {
  return function thunk(dispatch, getstate) {
    api(`/developers/${userId}`, {
      method: "PUT",
      body: {
        name: name,
        intro: intro,
        github_username: github,
        website: website,
        technologies: technologies
      },
      jwt: jwt
    })
      .then(data => {
        dispatch(foundProfile(data));
        dispatch(updateUserData(data));
      })
      .catch(err => console.log("err", err));
  };
}
