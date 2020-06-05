import axios from 'axios'

const SET_USERNAME = 'SET_USERNAME'
const SET_REPOSITORIES = 'SET_REPOSITORIES'
const SET_REPOSITORIES_ERROR = 'SET_REPOSITORIES_ERROR'
const SET_USER = 'SET_USER'
const SET_README_VIEW = 'SET_README_VIEW'
const SET_SEARCH_REPO = 'SET_SEARCH_REPO'

const initialState = {
  username: '',
  list: [],
  readme: '',
  error: false,
  user: [],
  search: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      return { ...state, username: action.name }
    }
    case SET_REPOSITORIES: {
      return { ...state, list: action.repo }
    }
    case SET_README_VIEW: {
      return { ...state, readme: action.readme }
    }
    case SET_SEARCH_REPO: {
      return { ...state, search: action.search }
    }
    case SET_USER: {
      return { ...state, user: action.user }
    }
    case SET_REPOSITORIES_ERROR: {
      return { ...state, error: true }
    }
    default:
      return state
  }
}

export function updateUsername(name) {
  return { type: SET_USERNAME, name }
}

export function searchRepos(search) {
  return { type: SET_SEARCH_REPO, search }
}

export function setRepositories(username) {
  return (dispatch) => {
    return axios(`https://api.github.com/users/${username}/repos`)
      .then(({ data }) => dispatch({ type: SET_REPOSITORIES, repo: data }))
      .catch(() => dispatch({ type: SET_REPOSITORIES_ERROR }))
  }
}

export function setUser(username) {
  return (dispatch) => {
    return axios(`https://api.github.com/users/${username}`)
      .then(({ data }) => dispatch({ type: SET_USER, user: data }))
      .catch(() => dispatch({ type: SET_REPOSITORIES_ERROR }))
  }
}

export const updateReadme = (userName, readme) => {
  const headers = { Accept: 'application/vnd.github.VERSION.raw' }
  return (dispatch) => {
    axios(`https://api.github.com/repos/${userName}/${readme}/readme`, { headers })
      .then(({ data }) => {
        dispatch({ type: SET_README_VIEW, readme: data })
      })
      .catch(() => dispatch({ type: SET_REPOSITORIES_ERROR }))
  }
}
