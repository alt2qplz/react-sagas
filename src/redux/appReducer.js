import {takeEvery, takeLatest, call, put} from 'redux-saga/effects'

const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE'
const REQUEST_POSTS = 'REQUEST_POSTS'
const FETCH_POSTS = 'FETCH_POSTS'

const initialState = {
  text: 'hello',
  posts: []
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_MESSAGE:
      return {
        ...state,
        text: action.text
      }
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}

export const newMessageAC = text => ({type: SET_NEW_MESSAGE, text: text})

export const fetchPostsAC = () => ({type: REQUEST_POSTS})

//sagas

export function* sagaWatcher() {
  yield takeLatest(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
  const payload = yield call(fetchPosts)
  yield put({ type: FETCH_POSTS, posts: payload })
}

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  return await res.json()
}
