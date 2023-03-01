import React from "react";
import { ITodo } from "../../features/todos/TodosSlice";
import { TodoItem } from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

interface TodoListProps {
	columnsTitles: string[];
	todoList: ITodo[];
	handleClick: (
		event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
		todo: ITodo
	) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
	columnsTitles,
	todoList,
	handleClick,
}) => {
	return (
		<div className={s.todoList}>
			<table width="100%" className={s.todoList__table}>
				<thead>
					<tr>
						{columnsTitles.map((title, index) => (
							<th className={s.todoList__columnName} key={index} scope="col">
								{title}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{todoList.map((todo) => (
						<TodoItem todo={todo} handleClick={handleClick} key={todo.id} />
					))}
				</tbody>
			</table>
		</div>
	);
};
