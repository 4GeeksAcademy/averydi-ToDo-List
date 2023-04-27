import React, {useState} from "react";
import { FaRagTrashAlt } from "react-icons/fa";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>Honey Do List</h1>
			<ul>
				<li>
					<input type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="What was I supposed to do?"
					></input>
				</li>
				{todos.map((item, index) => (
					<li>
						{item}{" "} 
						<i 
							className="far fa-clock" 
							onClick={() => 
								setTodos(
									todos.filter(
										(t, currentIndex) => 
											index != currentIndex
									)
								)			 
							}></i>
					</li>
				))}
			</ul>
			<div>{todos.length}</div>
		</div>
	);
};

export default Home;
