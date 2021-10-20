import * as entriesSaga from './EntriesSaga';
import * as ordersSaga from './OrdersSaga';

export function initSagas(sagaMiddleware){
 Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
 Object.values(ordersSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}