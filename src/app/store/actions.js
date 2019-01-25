import axios from 'axios';

export const APP_ACTION_TYPES = {
  FETCH_PROJECTS: 'FETCH_PROJECTS',
  FETCH_ARTICLES: 'FETCH_ARTICLES',
};

export const fetchProjects = () => async (dispatch) => {
  const result = await axios({
    url: 'https://api.github.com/users/htdangkhoa/repos',
    method: 'get',
  });

  dispatch({
    type: APP_ACTION_TYPES.FETCH_PROJECTS,
    payload: result.data,
  });
};

export const fetchArticles = () => async (dispatch) => {
  const result = await axios({
    url: '/articles',
    baseURL: '/api',
    method: 'get',
  });

  dispatch({
    type: APP_ACTION_TYPES.FETCH_ARTICLES,
    payload: result.data.payload,
  });
};
