
export function addToAlertRequest() {
  return {
    type: '@alert/ADD_REQUEST',
  };
}

export function addToAlertSuccess() {
  return {
    type: '@alert/ADD_SUCCESS',
  };
}

export function addEmail(email) {
  return {
    type: '@alert/ADD_EMAIL',
    email,
  };
};
