import Numpad from './Numpad';
import Input from './Input';
import { useState } from 'react';
import History from './History';
export default function Calculator() {
	const [calc, setCalc] = useState('');
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [actualN, setActualN] = useState(0);
	const [operation, setOperation] = useState('');
    const [history, setHistory] = useState([]);
	return (
		<>
            <History history={history}/>
			<Input calc={calc} />
			<Numpad
				calc={calc}
				setCalc={setCalc}
				number1={number1}
				setNumber1={setNumber1}
				number2={number2}
				setNumber2={setNumber2}
				actualN={actualN}
				setActualN={setActualN}
                operation={operation}
                setOperation={setOperation}
                history = {history}
                setHistory = {setHistory}
			/>
		</>
	);
}
