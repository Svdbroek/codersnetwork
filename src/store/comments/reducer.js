const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_COMMENTS": {
      // => Ask yourself: what is action.payload?
      return {...action.payload};
    }
    default: {
      return state;
    }
  }
}