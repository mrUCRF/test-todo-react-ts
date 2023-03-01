import s from "./AddTodoInput.module.scss";

interface AddTodoInputProps {
	setInputData: (data: string) => void;
	inputDataValue: string | number;
	placeholder: string;
	label: string;
	error?: boolean;
}

export const AddTodoInput: React.FC<AddTodoInputProps> = ({
	setInputData,
	inputDataValue,
	placeholder,
	label,
	error,
}) => {
	return (
		<div className={s.addTodo__inputBlock}>
			<div className={s.addTodo__inputLabel}>{label}</div>
			<input
				onChange={(e) => setInputData(e.target.value)}
				type="text"
				className="input"
				placeholder={placeholder}
				value={inputDataValue}
				style={{ border: error ? "1px solid red" : "" }}
			/>
		</div>
	);
};
