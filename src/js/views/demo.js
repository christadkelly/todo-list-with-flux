import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
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
				{store.demo.map((todo, index) => 
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
						<label>{todo.title}</label>
					</li>))
				}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
