//LINK - packages
import { applyMiddleware, legacy_createStore } from "redux"
// import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly"
import { thunk } from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
//LINK - sources
import rootReducer from './reducers/rootReducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = legacy_createStore(
  // rootReducer,
  persistedReducer,
  applyMiddleware(thunk)
  // composeWithDevTools(applyMiddleware(thunk))
)

export default store
