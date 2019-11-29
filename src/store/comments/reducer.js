const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_COMMENTS": {
      // => Ask yourself: what is action.payload?
      return {...action.payload};
    }
    case "COMMENT_SUBMISION":{
        return {
            ...state, rows: [action.payload, ...state.rows]
        }
    }
    default: {
      return state;
    }
  }
}