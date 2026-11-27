import { useState } from 'react'
import './App.css'

function App() {
	const [time, setTime] = useState(0)
	const [running, setRunning] = useState(false)

	return (
		<>
			<h1>Stop Timer Project</h1>
			<div>
				<span>{'0' + Math.floor((time / 60000) % 60)}:</span>
				<span>{'0' + Math.floor((time / 1000) % 60)}:</span>
				<span>{'0' + Math.floor((time / 10) % 100)}:</span>
			</div>
			<div>
				<button
					onClick={() => {
						setRunning(true)
					}}
				>
					Start
				</button>
				<button
					onClick={() => {
						setRunning(false)
					}}
				>
					Stop
				</button>
				<span>{'0' + Math.floor((time / 60000) % 60)}:</span>
				<button>Restart</button>
			</div>
		</>
	)
}

export default App
