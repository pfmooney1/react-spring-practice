import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './App.css';
import Header from './components/header';
import DropdownMenu from './components/dropdown-menu';
// import dropDown from "./springs"

function App() {
	const [dropdownVisible, toggleDropdown] = useState(false);
	const [flipped, toggleFlipped] = useState(false);

	const dropDown = useSpring({
		// translateX: dropdownVisible ? 0 : -150,
		translateY: dropdownVisible ? 0 : -150,
		display: dropdownVisible ? "block" : "none",
	})

	const flipOver = useSpring({
		from: {
			transform: "rotate3d(0, 0, 0, 0)"
		},
		to: {
			transform: "rotate3d(0, 1, 0, 0.5turn)"
		},
		reverse: flipped
	})

	function dropDownToggle() {
		let prevValue = dropdownVisible;
		let newValue = !prevValue;
		toggleDropdown(newValue);
	}

	function flipCard() {
		let prevValue = flipped;
		let newValue = !prevValue;
		toggleFlipped(newValue);
	}
	
	return (
		<div className="App">
			<Header dropDownToggle={dropDownToggle} />
			{dropdownVisible && <DropdownMenu  dropdownVisible={dropdownVisible} style={dropDown} />}
			<main>
				<animated.div className="chanceCard" style={flipOver} onClick={flipCard}>
					{flipped &&	<div className='chanceCardFront'>
						<h1>Advance to Go.</h1>
						<h3>(Collect $200)</h3>
					</div>}
					{!flipped && <div className='chanceCardBack'>
						<h1>CHANCE</h1>
					</div>}
				</animated.div>
			</main>
		</div>
	);
}

export default App;
