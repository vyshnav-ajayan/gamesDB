/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import gamesSaga from './gamesSaga';

export default function* watch() {
  yield all([takeEvery(types.LIST_GAMES_REQUEST, gamesSaga)]);
}
