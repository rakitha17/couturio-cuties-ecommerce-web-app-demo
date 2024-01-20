//LINK - packages
import { applyMiddleware, legacy_createStore } from "redux"
// import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly"
import { thunk } from "redux-thunk"
//LINK - sources
import rootReducer from './reducers/rootReducer'

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
  // composeWithDevTools(applyMiddleware(thunk))
)

export default store
