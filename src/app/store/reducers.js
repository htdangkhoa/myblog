import { combineReducers } from 'redux';
import { APP_ACTION_TYPES } from './actions';

const initialState = {
  projects: [],
  articles: [],
};

const root = (state = initialState, action) => {
  switch (action.type) {
    case APP_ACTION_TYPES.FETCH_PROJECTS: {
      return { ...state, projects: action.payload };
    }
    case APP_ACTION_TYPES.FETCH_ARTICLES: {
      return { ...state, articles: action.payload };
    }
    default:
      return state;
  }
};

export default combineReducers({ root });
