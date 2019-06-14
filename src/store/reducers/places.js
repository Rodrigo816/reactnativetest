import {ADD_PLACE,DELETE_PLACE} from '../actions/actionTypes';
const initialState = {
  placeName: '',
  places: [],
}
const reducer = (state=initialState, action) => {
  switch(action.type){
    case ADD_PLACE:
      return {
        ...state,
        places:state.places.concat({
          key:Math.random(), 
          value: action.payload,
          image: {
            url:"https://www.google.pt/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
        })
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.payload;
        }),
        selectedPlace:  null
      }
    default:
      return state
  }
}

export default reducer;