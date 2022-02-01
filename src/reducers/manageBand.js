export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.band] }
    default:
      return state;
  }
};
// export default function manageBand(state = {bands: [],}, action) {
  
//   switch (action.type) {

//     case 'ADD_BAND':
//       console.log('New band name %s',action.band)
//       return {...state, bands: [...state.bands, action.band]}

//     default:
//       return state
//   }
// };
