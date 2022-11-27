import './timer.css';
import { useState } from 'react';
export default function Progress(props) {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${props.done}%`,
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
			</div>
		</div>
	)
}


