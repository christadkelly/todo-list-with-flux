import "../../styles/home.css";

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>to-do's</h1>
			<ul>
				<li>
					<input 
					className="input"
					type='text' 
					placeholder='What needs to be done?' 
					// value={items} 
					// onChange={(e) => setItems(e.target.value)} 
					// onKeyDown={addItemToList}
					>
					</input>
				</li>
				{store.todos.map((todo, index) => 
					(<li id={index}>
						<span
						className="hide"
						// onClick={() => setAddToList(addToList.filter((t, currentIndex) => index != currentIndex))}
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

