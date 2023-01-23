import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './App.css';
import Header from './components/header';
import DropdownMenu from './components/dropdown-menu';
import Notification from './components/notification';
import ChanceCard from './components/chance-card';

function App() {
	// ! MENU DROPDOWN
	const [dropdownVisible, toggleDropdown] = useState(false);
	const dropDown = useSpring({
		// translateX: dropdownVisible ? 0 : 150,
		translateY: dropdownVisible ? 0 : -150,
		display: dropdownVisible ? "block" : "none",
	})
	function dropDownToggle() {
		let prevValue = dropdownVisible;
		let newValue = !prevValue;
		toggleDropdown(newValue);
	}


	// ! CHANCE CARD	
	const [flipped, toggleFlipped] = useState(false);
	function flipCard() {
		let prevValue = flipped;
		let newValue = !prevValue;
		toggleFlipped(newValue);
	}
	const flipOver = useSpring({
		from: {
			transform: "rotate3d(0, 0, 0, 0)"
		},
		to: {
			transform: "rotate3d(0, 1, 0, 0.5turn)"
		},
		reverse: flipped
	})


	// ! Notifications
	const [notificationVisible, toggleNotification] = useState(false);
	const notifyMe = useSpring({
		translateY: notificationVisible ? 0 : -150,
	})
	function notify() {
		toggleNotification(true);
		setTimeout(() => {
			toggleNotification(false)
		}, 2500);
	}

	return (
		<div className="App">
			<Header dropDownToggle={dropDownToggle} />
			{dropdownVisible && <DropdownMenu dropdownVisible={dropdownVisible} style={dropDown} />}
			{notificationVisible && <Notification notifyMe={notifyMe} toggleNotification={toggleNotification} /> }
			<main>
				<ChanceCard flipped={flipped} flipOver={flipOver} flipCard={flipCard} />
				<button onClick={notify}>
					Test notifications
				</button>
			</main>
		</div>
	);
}

export default App;
