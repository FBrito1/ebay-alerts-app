export default function cart(state = {}, action) {
  console.log('actio', action);
  switch (action.type) {
    case '@alert/ADD_SUCCESS':
      return state;
    case '@alert/ADD_EMAIL': {
      return {...state, userEmail: action.email }
    }
    default:
      return state;
  }
}
