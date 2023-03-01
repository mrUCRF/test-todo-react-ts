import { useRef } from "react";
import ReactDOM from "react-dom";
import { ITodo } from "../../features/todos/TodosSlice";
import s from "./Modal.module.scss";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	todo: ITodo | null;
}

export const Modal = ({ isOpen, onClose, todo }: ModalProps) => {
	const modalRef = useRef(null);
	const handleClose = () => {
		onClose();
	};

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className={`modal-overlay${isOpen ? " closing" : ""}`}>
			<div ref={modalRef} className={s.modal}>
				<div className={s.modal__body}>
					<h2 className={s.modal__title}>{todo?.title}</h2>
					<div className={s.modal__descr}>
						<b>Description:</b> <p>{todo?.description}</p>
					</div>
					<p className={s.modal__status}>
						Status: <input type="checkbox" checked={todo?.status} readOnly />
					</p>
					<button className={s.modal__btn} onClick={handleClose}>
						Close
					</button>
				</div>
			</div>
		</div>,
		document.body
	);
};
