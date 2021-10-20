import * as entriesSaga from './EntriesSaga';

export function initSagas(sagaMiddleware){
 Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}