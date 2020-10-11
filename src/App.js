import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./Firebase";
import Message from "./Message";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState("");

	// useState = variable in React with Scalable ability to reloop without refreshing the existing state
	// UseEffect = run the code in a condition

	useEffect(() => {
		// run once whne app components loads
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapShot) => {
				setMessages(
					snapShot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	useEffect(() => {
		// run code here
		// if its inside [], this code only runs once
		// if the [] has a var, then i will fire the function when required
		setUsername(prompt("please enter your name"));
	}, []);

	const sendMessage = (event) => {
		// all the logic to send a message
		event.preventDefault();
		db.collection("messages").add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setMessages([...messages, { username: username, message: input }]);
		setInput("");
	};

	return (
		<div className="App">
			<img
				src="https://www.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
				alt=""
			/>
			<h1>Facebook Messenger Clone</h1>
			<h2>Welcome {username} 🚀, Let's Chat 🔥</h2>

			<form className="app__form">
				<FormControl className="app__formControl">
					<Input
						className="app__input"
						placeholder="Enter a message..."
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>

					<IconButton
						className="app__iconButton"
						disabled={!input}
						variant="contained"
						color="primary"
						type="submit"
						onClick={sendMessage}
					>
						<SendIcon />
					</IconButton>
				</FormControl>
			</form>

			{/* Messages Themselves */}
			<FlipMove>
				{messages.map(({ id, message }) => {
					return <Message key={id} username={username} message={message} />;
				})}
			</FlipMove>
		</div>
	);
}

export default App;
