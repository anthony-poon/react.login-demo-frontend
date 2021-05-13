import createRootReducer from "./reducer";
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = createRootReducer();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["login"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}