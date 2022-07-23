/*
 * Reducer actions related with games listing
 */
import * as types from './types';
import {
  IGameListResponse,
  IGamesListRequestState,
} from 'app/models/api/games';

export function requestGameList(pageNumber: IGamesListRequestState) {
  return {
    type: types.LIST_GAMES_REQUEST,
    pageNumber,
  };
}

export function gameListFailed() {
  return {
    type: types.LIST_GAMES_FAILED,
  };
}

export function onGameListResponse(response: IGameListResponse) {
  return {
    type: types.LIST_GAMES_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.DISABLE_LOADER,
  };
}
