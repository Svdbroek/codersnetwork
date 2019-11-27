const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
     case 'ADD_POST':{ 
        return action.payload
        
     }
    
    default: {
      return state;
    }
  }
}