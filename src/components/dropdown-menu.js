import { useSpring, animated } from '@react-spring/web';

function DropdownMenu({dropdownVisible, style}) {
	return (
		<animated.div className="dropdownMenu" style={style}>
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
