import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, } from "../store/slice/todoSlice";
import TodoItem from "./TodoItem";
import { RootState } from "../store/store";
import { Button, TextField } from "@mui/material";

const TodoList: React.FC = () => {
	const {todos} = useSelector((state: RootState) => state.todos);
	const dispatch = useDispatch();
	const [text, setText] = useState("");

	const handleAddTodo = () => {
		if (text.trim().length > 0) {
			dispatch(addTodo(text));
			setText("");
		}
	};

	return (
		<div>
			<h1>Todo List</h1>
			<TextField
         label="text"
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<Button variant="outlined" onClick={handleAddTodo}>Add Todo</Button>
			<ul>
				{todos.map((todo:any) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
