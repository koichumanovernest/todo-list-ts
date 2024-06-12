import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/slice/todoSlice";
import { Button } from "@mui/material";

interface TodoItemProps {
	todo: {
		id: number;
		text: string;
		completed: boolean;
	};
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const dispatch = useDispatch();

	return (
		<li>
			<span
				style={{ textDecoration: todo.completed ? "line-through" : "none" }}
				onClick={() => dispatch(toggleTodo(todo.id))}>
				{todo.text}
			</span>
			<Button variant="contained" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
		</li>
	);
};

export default TodoItem;
