import React, { useState } from "react";

const Home = () => {
	//defino el estado para la lista de tareas (todos) y la nueva tarea (newTodo)
	const [todos, setTodos] = useState([]) //Inicializo un array vacío para las tareas
	const [newTodo, setNewTodo] = useState("") //Inicializo una cadena vacía para la nueva tarea

	console.log(todos)

	// Renderiza el componente
	return (
		<div className="text-center container m-5">

			<h1 className="text-danger fw-light">todos</h1>


			<input className="form-control" placeholder="What needs to be done?" //campo de entrada para agregar nuevas tareas
				value={newTodo}
				onChange={(e) => {
					setNewTodo(e.target.value);
				}}

				//Verifica si la tecla presionada es Enter
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						setTodos([...todos, newTodo]); //  Agrega la nueva tarea al array todos
						setNewTodo("");  // Limpia el campo de entrada
					}

				}}
			/>

			<ul className="list-group">
				{todos.length > 0 ? todos.map((todo, index) => {
					return (
						<li key={index} class="list-group-item d-flex justify-content-between">
							{todo}
							<button className="btn btn-light ms-auto" onClick={() => setTodos(todos.filter((_, i) => index != i))}>X</button>
						</li>
					)

				}) :
					<li className="list-group-item">No hay tareas</li>
				}
				<li className="list-group-item d-flex justify-content-start text-black-50">{todos.length} Item left</li>
			</ul>

		</div>
	);
};

export default Home;
