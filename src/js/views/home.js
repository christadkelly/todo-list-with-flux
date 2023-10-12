import "../../styles/home.css";

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [inputValue, setInputValue] = useState("");
	const createToDo = (e) => {
		if ( e.key == "Enter" && inputValue != "" ){
			actions.addTodo(inputValue)
			setInputValue("")
		}
	}

	return (
		<div className="container">
			<h1>to-do's</h1>
			<ul>
				<li>
					<input 
					className="input"
					type='text' 
					placeholder='What needs to be done?' 
					value={inputValue} 
					onChange={(e) => setInputValue(e.target.value)} 
					onKeyPress={(e) => createToDo(e)}
					>
					</input>
				</li>
				{store.todos.map((todo, index) => 
					(<li id={index}>
						<span
						className="hide"
						onClick={() => actions.deleteTodo(index)}
						>
							<i class="fa-solid fa-eraser"></i>
						</span>
						<input 
						type="checkbox"
						className="checkbox"/> 
						<label>{todo.label}</label>
					</li>))
				}
			</ul>
		</div>
	);
};

