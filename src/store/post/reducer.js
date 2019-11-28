const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_POSTS': {
      console.log('from the reducer', action.payload)
      return action.payload

    }

    default: {
      return state;
    }
  }
}