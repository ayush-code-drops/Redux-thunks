import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./redux/auth/reducer";
import { reducer } from "./redux/todos/reducer";

// const customMiddleware = (store) => (next) => (action) => {
//   typeof action === "function" ? action(store.dispatch) : next(action);
// };
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const rootReducer = combineReducers({
  app: reducer,
  auth: authReducer
});
export const store = createStore(rootReducer, enhancer);
