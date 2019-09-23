import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import userReducer from './components/common/user/state/reducer';
import { projectReducer } from './components/project/state/reducers';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  userState: userReducer,
  projectState: projectReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export default store;
