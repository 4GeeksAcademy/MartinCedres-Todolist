import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([])
	const [newTodo, setNewTodo] = useState("")
	console.log(todos)
	return (
		<div className="text-center container m-5">
			<input className="form-control" placeholder="xxxxx"
				value={newTodo}
				onChange={(e) => {
					setNewTodo(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						setTodos([...todos, newTodo]);
						setNewTodo("");
					}

					console.dir(e.code)
				}}
			/>
			<ul className="list-group">
				{todos.length > 0 ? todos.map((todo, index) => {
					return (
						<li key={index} class="list-group-item d-flex justify-content-between">
							{todo}
							<button className="btn btn-danger ms-auto" onClick={() => setTodos(todos.filter((_, i) => index != i))}>X</button>
						</li>
					)

				}) :
					<li className="list-group-item">No hay tareas</li>

				}

			</ul>
		</div>
	);
};

export default Home;
