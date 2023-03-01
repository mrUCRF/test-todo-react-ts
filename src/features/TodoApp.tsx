import React from "react";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks/useAppDispatch";
import { store } from "../app/store";
import { AddTodoForm } from "../components/AddTodoForm/AddTodoForm";
import { addTodo, todosSelectors } from "./todos/TodosSlice";

const columnData = ["ID", "TITLE", "DESCRIPRION", "STATUS"];

export const TodoApp: React.FC = () => {
	const todoList = todosSelectors.selectAll(store.getState());

	const [, setTodods] = useState(todoList);

	const dispatch = useAppDispatch();

	const addNewTodo = (
		titleData: string | number,
		descriptionData: string | number
	) => {
		dispatch(
			addTodo({
				id: todoList.length + 1,
				title: titleData,
				description: descriptionData,
				status: false,
			})
		);
		setTodods(todosSelectors.selectAll(store.getState()));
	};
	return (
		<div>
			<AddTodoForm addNewTodo={addNewTodo} />
		</div>
	);
};
