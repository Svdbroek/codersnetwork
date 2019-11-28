import api from "../../api.js"

export function developersFetched(data) {
  return {
    type: "developers/FETCHED",
    payload: data
  };
}

export function fetchDevelopers(dispatch, getState) {
  api("/developers?limit=100")
    .then(data => {
      // note: just `dispatch` here now
      dispatch(developersFetched(data))
    })
}