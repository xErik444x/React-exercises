import Button from './Button';
export default function Numpad({
	setCalc,
	calc,
	number1,
	setNumber1,
	number2,
	setNumber2,
    setActualN,
    actualN,
    operation,
    setOperation,
    history,
    setHistory
}) {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(4, 1fr)',
				gridGap: '10px',
				gridAutoRows: 'minmax(100px, auto)',
			}}
		>
			{[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '/', 0, 'clear', '=', '*'].map(
				(num) => (
					<Button
						key={num}
						setCalc={setCalc}
						calc={calc}
						number1={number1}
						setNumber1={setNumber1}
						number2={number2}
						setNumber2={setNumber2}
                        setActualN={setActualN}
                        actualN={actualN}
                        operation={operation}
                        setOperation={setOperation}
                        history={history}
                        setHistory={setHistory}
					>
						{num}
					</Button>
				)
			)}
		</div>
	);
}
