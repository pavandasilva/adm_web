import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AttendanceState } from './attendance/actions';
import rootReducer from './rootReducer';

export interface AppState {
  attendance: AttendanceState
}

const store: Store<AppState> = createStore(rootReducer, composeWithDevTools());

export default store;
