
import watchPostsSaga from "./posts.saga";
        
            
function* rootSaga () {
     yield watchPostsSaga()
} 
 export default rootSaga;