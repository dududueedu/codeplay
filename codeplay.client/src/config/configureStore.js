import { applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';
import mapReducer from "../resources/GameMap/reducer";

export default function confiStore(preloadedState) {
  const rootReducer = combineReducers({
    map: mapReducer,
  });

  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, mapReducer];
  const composedEnhancers = compose(...enhancers);

  const store = configureStore({reducer: rootReducer}, preloadedState, composedEnhancers);

  return store;
}
