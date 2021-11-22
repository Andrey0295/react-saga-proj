import { put, takeEvery, call } from 'redux-saga/effects';
import postsActions from '../actions/posts.actions';
import { postsService } from '../services/posts.services';

interface IDeleteAction {
    type: string,
    payload: number | string
}


function*  getPostsSaga(): any {
    try {
        const result = yield postsService.getPostsService()
        const data = yield result.json()
        yield put(postsActions.getPostsSuccess(data))
        
    } catch(err: any) {
        yield put(postsActions.getPostsError(err.message));
    }
}


function* deletePostsSaga(action: IDeleteAction):any {
        const response = yield call(postsService.deletePostsService, action.payload)
        switch (response.status) {
			case 200:
			yield put(postsActions.deletePostsSuccess(action.payload));
            break;
            default: yield put(postsActions.deletePostsError("Somthing went wrong"));    
        }
}

function* watchPostsSaga(){
    yield takeEvery(postsActions.getPostsRequest, getPostsSaga );
    yield takeEvery(postsActions.deletePostsRequest, deletePostsSaga);
}


export default watchPostsSaga;