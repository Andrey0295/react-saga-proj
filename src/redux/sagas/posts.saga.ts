import { put, takeEvery } from 'redux-saga/effects';
import { deletePostsFailure, deletePostsSuccess, getPostsFailure, getPostsSuccess } from "../actions/posts.actions";
import { postsService } from '../services/posts.services';


function*  getPostsSaga(): any {
    try {
        const result = yield postsService.getPostsService()
        const data = yield result.json()
        yield put(getPostsSuccess(data))
        
    } catch(err: any) {
        yield put(getPostsFailure(err.message));
    }
}

function* deletePostsSaga({payload}: any): any {
    try {
        yield postsService.deletePostsService(payload)
        yield put(deletePostsSuccess(payload))
    }
    catch(err: any) {
        yield put(deletePostsFailure(err.message))
    }
}

function* watchPostsSaga(){
    yield takeEvery("GET_POSTS_REQUEST", getPostsSaga );
    yield takeEvery("DELETE_POSTS_REQUEST", deletePostsSaga);
}


export default watchPostsSaga;