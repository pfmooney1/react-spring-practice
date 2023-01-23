import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

function DropdownMenu({dropdownVisible, style}) {
	const dropDown = useSpring({
		translateY: dropdownVisible ? 0 : -150,
		ariaHidden: dropdownVisible ? "visible" : "hidden"
	})
	return (
		<animated.div className="dropdownMenu" style={dropDown}>
			<ul>
				<li>Menu 1</li>
				<li>Menu 2</li>
				<li>Menu 3</li>
				<li>Menu 4</li>
				<li>Menu 5</li>
			</ul>
		</animated.div>
	);
}

export default DropdownMenu;
