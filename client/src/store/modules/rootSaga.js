import { all } from 'redux-saga/effects';

import alert from './alert/sagas';

export default function* rootSaga() {
  return yield all([alert]);
}
