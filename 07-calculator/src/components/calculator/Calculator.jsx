import Numpad from './Numpad';
import Input from './Input';
import { useState } from 'react';
export default function Calculator() {
    const [calc, setCalc] = useState("");
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
	return (
		<>
			<Input calc={calc}/>
			<Numpad calc={calc} setCalc={setCalc} number1={number1} setNumber1={setNumber1} number2={number2} setNumber2={setNumber2}/>
		</>
	);
}
