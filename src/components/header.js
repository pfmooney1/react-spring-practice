import hamburgerMenu from "../images/hamburger-menu.svg"
function Header(props) {
	return (
		<header >
			<h1>App</h1>
			<img onClick={props.dropDownToggle} className="menuButton" src={hamburgerMenu} height={40} width={40} alt="menu" />
		</header>
	);
}

export default Header;
