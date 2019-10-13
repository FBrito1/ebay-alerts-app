export default function cart(state = {}, action) {
  switch (action.type) {
    case '@alert/ADD_EMAIL': {
      return {...state, userEmail: action.email }
    }
    default:
      return state;
  }
}
