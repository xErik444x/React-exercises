export default function Button({ name, count, setCount }) {
	const buttonStyle = { margin: '0 10px', fontSize: '2rem' };

	const handleClick = (ev) => {
		ev.preventDefault();
		if (name === '+') {
			setCount(count + 1);
		}
		if (name === '-') {
			setCount(count - 1);
		}
		return;
	};
	
	return (
		<button onClick={handleClick} style={buttonStyle}>
			{name}
		</button>
	);
}
