import { useState } from 'react';
import { useSpring, useTransition, animated } from '@react-spring/web';
import './App.css';
import Header from './components/header';
import DropdownMenu from './components/dropdown-menu';
import Notification from './components/notification';
import ChanceCard from './components/chance-card';

function App() {
	// ! MENU DROPDOWN
	const [dropdownVisible, toggleDropdown] = useState(false);
	function dropDownToggle() {
		let prevValue = dropdownVisible;
		let newValue = !prevValue;
		toggleDropdown(newValue);
	}

	// ! Notifications
	const [notificationVisible, toggleNotification] = useState(false)
	function notify() {
		toggleNotification(true);
		setTimeout(() => {
			toggleNotification(false)
		}, 2500);
	}


	// ! Use Transition
	let [toggled, toggle] = useState(true);
	const transition = useTransition(toggled, {
		from: { rotate: "-90deg"},
		enter: { rotate: "0deg" },
		leave: { rotate: "-90deg" },
		config: {
			duration: 500,
		},
		expires: 1000
	});

	return transition((style, item) => (
		<div>
			<div className="App">
				<animated.h2 style={style}>useTransition {toggled.toString()}</animated.h2>
				<button onClick={() => toggle(!toggled)}>
					Go home
				</button>
			</div>
		</div>
	));


	// return (
	// 	<div className="App">
	// 		<Header dropDownToggle={dropDownToggle} />
	// 		<DropdownMenu dropdownVisible={dropdownVisible} />
	// 		<Notification toggleNotification={toggleNotification} notificationVisible={notificationVisible}/> 
	// 		<main>
	// 			<button onClick={notify}>Test notifications</button>
	// 			<ChanceCard />
	// 		</main>
	// 	</div>
	// );
}

export default App;
