// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {takeEvery, call, put, apply, take} from 'redux-saga/effects';
import postsActions from "../actions/posts.actions";
import { postsService } from '../services/posts.services';


function*  getPostsSaga(): any {
    try {
        const result = yield postsService.getPostsService()
        const data = yield result.json()
        yield put(postsActions.getPostsSuccess(data))
        
    } catch(err: any) {
        yield put(postsActions.getPostsFailure(err.message));
    }
}

function* deletePostsSaga({id}: any): any {
    try {
        yield postsService.deletePostsService(id)
        yield put(postsActions.deletePostsSuccess(id))
    }
    catch(err: any) {
        yield put(postsActions.deletePostsFailure(err.message))
    }
}

function* watchPostsSaga(){
    yield takeEvery("GET_POSTS_REQUEST", getPostsSaga );
    yield takeEvery("DELETE_POSTS_REQUEST", deletePostsSaga);
}
        
            
function* rootSaga () {
     yield watchPostsSaga()
} 
 export default rootSaga;