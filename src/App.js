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

	return (
		<div className="App">
			<Header dropDownToggle={dropDownToggle} />
			<DropdownMenu dropdownVisible={dropdownVisible} />
			<Notification toggleNotification={toggleNotification} notificationVisible={notificationVisible}/> 
			<main>
				<button onClick={notify}>Test notifications</button>
			{/* // ! -Make it so that it doesn't rerender: Opacity instead. */}
				<ChanceCard />
			</main>
		</div>
	);
}

export default App;
