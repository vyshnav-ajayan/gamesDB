import { put, call } from 'redux-saga/effects';
import gamesListing from 'app/services/gamesListing';
import * as gamesActions from 'app/store/actions/gamesActions';

// Our worker Saga that listing the games
export default function* gamesAsync(actions: any) {
  yield put(gamesActions.enableLoader());

  const response = yield call(gamesListing, actions.pageNumber);

  if (response.data?.results?.length > 0) {
    yield put(gamesActions.onGameListResponse(response.data?.results));
    yield put(gamesActions.disableLoader());
  } else {
    yield put(gamesActions.gameListFailed());
    yield put(gamesActions.disableLoader());
  }
}
