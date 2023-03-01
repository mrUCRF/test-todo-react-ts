import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/TodosSlice";

export const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>; // state type
export type AppDispatch = typeof store.dispatch; // dispatch type
