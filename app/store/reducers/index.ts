/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as gamesListReducer from './gamesReducer';
export default Object.assign(loadingReducer, gamesListReducer);
