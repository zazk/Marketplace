import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import userReducer from './components/common/user/reducer';
import projectReducer from './components/project/reducer';

const rootReducer = combineReducers({
  userState: userReducer,
  projectState: projectReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
