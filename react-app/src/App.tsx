import { useState } from "react";
import "./App.css";

function App() {
	const [game, setGame] = useState({
		id: 1,
		player: {
			name: "John",
		},
	});

	const handleClick = () => {
		setGame({ ...game, player: { ...game.player, name: "Doe" } });
	};

	return (
		<>
			<button onClick={handleClick}>Change Name</button>
			<p>{game.player.name}</p>
		</>
	);
}

export default App;
