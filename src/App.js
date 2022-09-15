import React from "react";

import Book from "./Book/Book";

function App() {
	return (
		<div>
			<h1> Amazing books! </h1>
			<p> Let's take a look at <strong> ARMEN MARGINYAN's </strong> </p>
			<div>
				<Book
					title="Javascript"
					set="Interactive Programming"
					author="Armen Marginyan"
				/>
				<Book
					title="React"
					set="Interactive Programming"
					author="Armen Marginyan"
				/>
				<Book
					title="Angular"
					set="Interactive Programming"
					author="Armen Marginyan"
				/>
				<Book
					title="Vue.js"
					set="Interactive Programming"
					author="Armen Marginyan"
				/>
				<Book
					title="Node.js"
					set="Interactive Programming"
					author="Armen Marginyan"
				/>
			</div>
		</div>
	);
}

export default App;