const initialState = {
    accessToken: null,
    profile: {}
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
      case "auth/LOG_OUT": {
        // => Ask yourself: what is action.payload?
        return {...state,  accessToken: null, profile: null };
      }
      default: {
        return state;
      }
    }
  }