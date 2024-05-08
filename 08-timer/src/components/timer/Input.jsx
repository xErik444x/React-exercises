import { useEffect } from 'react';

export default function Input({ time, setTime, active, setActive }) {
	useEffect(() => {
		const totalTimeInSeconds = time.minutes * 60 + time.seconds;

		const interval = setInterval(() => {
			if (totalTimeInSeconds > 0 && active) {
				const newTime = totalTimeInSeconds - 1;
				setTime({
					minutes: Math.floor(newTime / 60),
					seconds: newTime % 60,
				});
			}else{
                setActive(false);
                clearInterval(interval);
                if (active) {
                    alert("TIMER!!!");
                }
            }
		}, 1000);

		return () => clearInterval(interval);
	}, [time, active]);
	function handleMinutesChange(event) {
		const newMinutes = event.target.value;
		setTime((prevTime) => ({ ...prevTime, minutes: newMinutes }));
	}

	function handleSecondsChange(event) {
		const newSeconds = event.target.value;
		setTime((prevTime) => ({ ...prevTime, seconds: newSeconds }));
	}

	return (
		<>
			<input
				onChange={handleMinutesChange}
				type="number"
				value={time?.minutes}
				placeholder="0"
				style={inputStyle}
				min="0"
				max="59"
				readOnly={active}
			/>
			m :
			<input
				onChange={handleSecondsChange}
				type="number"
				value={time?.seconds}
				placeholder="0"
				style={inputStyle}
				min="0"
				max="59"
				readOnly={active}
			/>
			s
		</>
	);
}

const inputStyle = {
	width: '50px',
	fontSize: '2rem',
};
