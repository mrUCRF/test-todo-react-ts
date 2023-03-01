import React from "react";
import { useState } from "react";
import { AddTodoInput } from "../AddTodoInput/AddTodoInput";
import s from "./AddTodoForm.module.scss";

interface AddTodoFormProps {
	addNewTodo: (
		title: string | number,
		descriptionData: string | number
	) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addNewTodo }) => {
	const [titleData, setTitleData] = useState("");
	const [descriptionData, setDescriptionData] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleClick = () => {
		if (!titleData || !descriptionData) {
			setErrorMessage("This field is empty");
		} else {
			setErrorMessage("");
			addNewTodo(titleData, descriptionData);
			setTitleData("");
			setDescriptionData("");
		}
	};
	return (
		<div className={s.addTodoForm}>
			<div>
				<div>
					<AddTodoInput
						inputDataValue={titleData}
						setInputData={setTitleData}
						placeholder={"Enter title"}
						label={"Title:"}
						error={errorMessage && !titleData ? true : false}
					/>
				</div>
				<div className={s.addTodoForm__error}>
					{titleData ? " " : <p>{errorMessage}</p>}
				</div>
			</div>
			<div>
				<div>
					<AddTodoInput
						inputDataValue={descriptionData}
						setInputData={setDescriptionData}
						placeholder={"Enter descriprion"}
						label={"Description:"}
						error={errorMessage && !descriptionData ? true : false}
					/>
				</div>
				<div className={s.addTodoForm__error}>
					{descriptionData ? " " : <p>{errorMessage}</p>}
				</div>
			</div>

			<button className={s.addTodoForm__btn} onClick={() => handleClick()}>
				Create
			</button>
		</div>
	);
};
