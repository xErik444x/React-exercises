import { useState } from "react";

export default function Switch() {
    const [status, setStatus] = useState(false)
    function handleStatus(){
        setStatus(!status)
    }
	return (
		<div>
			<label>
				<input onChange={handleStatus} type="checkbox" /> Status: {status ? "on": "off"}
			</label>
		</div>
	);
}
