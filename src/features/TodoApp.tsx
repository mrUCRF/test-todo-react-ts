import React from "react";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks/useAppDispatch";
import { store } from "../app/store";
import { AddTodoForm } from "../components/AddTodoForm/AddTodoForm";
import { TodoList } from "../components/TodoList/TodoList";
import { Modal } from "../components/TodoModal/Modal";
import { addTodo, ITodo, todosSelectors } from "./todos/TodosSlice";

const columnData = ["ID", "TITLE", "DESCRIPRION", "STATUS"];

export const TodoApp: React.FC = () => {
	const todoList = todosSelectors.selectAll(store.getState());

	const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
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
	const handleClick = (event: any, todo: ITodo) => {
		setSelectedTodo(todo);
		if (event.target.type !== "checkbox") {
			setIsOpen(true);
		}
	};
	const handleCloseModal = () => {
		setIsOpen(false);
		setSelectedTodo(null);
	};
	return (
		<div>
			<AddTodoForm addNewTodo={addNewTodo} />
			<TodoList
				columnsTitles={columnData}
				todoList={todoList}
				handleClick={handleClick}
			/>
			<Modal isOpen={isOpen} onClose={handleCloseModal} todo={selectedTodo} />
		</div>
	);
};
