import { useState } from 'react';
import Button from './Button';
import Header from './Header';

export default function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '80vh'
			}}
		>
			<Header count={count} />
			<div style={{ display: 'flex' }}>
				<Button
					count={count}
					setCount={setCount}
					name={'+'}
				/>
				<Button
					count={count}
					setCount={setCount}
					name={'-'}
				/>
			</div>
		</div>
	);
}
