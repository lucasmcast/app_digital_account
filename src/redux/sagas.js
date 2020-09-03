/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * 
 * File model searched in the redux-sagas documentation
 * @see https://redux-saga.js.org/
 */

/* import {fetchLogin} from '../dao/fetchAPI'
import { GET_LOGIN } from './actionsTypes'; */

/* function* fetchLogin(action){
    try{
        const news = yield call(fetchLogin, action.login);
        yield put(showNews(news));
    }catch(e){
        yield console.log(e)
    }
}
 */
function* mySaga() {
    /* yield takeEvery(GET_LOGIN, fetchLogin); */
}
export default mySaga;