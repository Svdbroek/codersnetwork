const initialState = null

export default function profilePageReducer(state = initialState, action) {
    switch (action.type) {
      case "FETCHED_PROFILE": {
          return action.payload
      }
      default:{ return state}
    }}