const initialState = {
    accessToken: null,
    profile: null
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case "auth/USER_LOGGED_IN": {
        // => Ask yourself: what is action.payload?
        return {...state, profile: action.payload}
      }

      case "auth/SAVE_ACCESS_TOKEN":{
        return {...state, accessToken:action.payload}
      }
      default: {
        return state;
      }
    }
  }