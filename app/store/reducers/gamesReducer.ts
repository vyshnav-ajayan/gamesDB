/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IGamesListState } from 'app/models/reducers/games';
import {
    IGamesListRequestState,
    IGameListResponseState,
} from 'app/models/actions/game';
const initialState: IGamesListState = {
  games: [],
  completeInitialFetch: false,
};

export const gamesListReducer = createReducer(initialState, {
  [types.LIST_GAMES_REQUEST](state: IGamesListState, action: any) {
    return {
      ...state,
    };
  },
  [types.LIST_GAMES_RESPONSE](state: IGamesListState, action: any) {
    return {
      ...state,
      completeInitialFetch: true,
      games: [...state.games, ...action.response],
    };
  },
  [types.LIST_GAMES_FAILED](state: IGamesListState) {
    return {
      ...state,
      games: [...state.games],
    };
  },
});
