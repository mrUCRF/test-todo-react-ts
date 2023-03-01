import React from "react";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { changeStatus, ITodo } from "../../features/todos/TodosSlice";
import s from "./TodoItem.module.scss";

export interface TodoItemProps {
	todo: ITodo;
	handleClick: (
		event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
		todo: ITodo
	) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, handleClick }) => {
	const dispatch = useAppDispatch();
	const changeTodoStatus = (id: number, status: boolean) => {
		dispatch(changeStatus({ id, changes: { status: !status } }));
	};
	return (
		<tr onClick={(event) => handleClick(event, todo)} className={s.todoList}>
			<td className={s.row__id}>{todo.id}.</td>
			<td className={s.row__title}>{todo.title}</td>
			<td className={s.row__descr}>{todo.description}</td>
			<td className={s.row__checkbox}>
				<input
					className={s.todoList__checkbox}
					type="checkbox"
					checked={todo.status}
					onChange={() => changeTodoStatus(todo.id, todo.status)}
				/>
			</td>
		</tr>
	);
};
