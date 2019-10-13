import { put, all, takeLatest } from 'redux-saga/effects';
//import { toast } from 'react-toastify';

//import api from '../../../services/api';
//import history from '../../../services/history';

import { addToAlertSuccess } from './actions';

// call é utilizado para metodos async que retornam promises
function* addAlert({ id }) {
  const data = {};

  yield put(addToAlertSuccess(data));
  // history.push('/alerts');
}

export default all([
  takeLatest('@alert/ADD_REQUEST', addAlert),
]);
