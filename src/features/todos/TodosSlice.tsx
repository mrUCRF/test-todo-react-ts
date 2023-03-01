import { RootState } from "../../app/store";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export interface ITodo {
	id: number;
	title: string | number;
	description: string | number;
	status: boolean;
}

const todoAdapter = createEntityAdapter<ITodo>({
	selectId: (todo) => todo.id,
});

export const TodoSlice = createSlice({
	name: "todos",
	initialState: todoAdapter.getInitialState([]),
	reducers: {
		addTodo: todoAdapter.addOne,
		changeStatus: todoAdapter.updateOne,
	},
});

export const todosSelectors = todoAdapter.getSelectors<RootState>(
	(state) => state.todo
);

export const { addTodo, changeStatus } = TodoSlice.actions;
export default TodoSlice.reducer;
