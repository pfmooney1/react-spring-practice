import { useSpring, animated } from '@react-spring/web';
import peasants from '../images/rally-the-troops.svg';
import dragons from '../images/dragon-head.svg';
import vikings from '../images/battle-gear.svg';
import coins from '../images/coins-pile.svg';

function Notification(props) {
	let notifications = [
		{
			image: peasants,
			text: "Peasant revolt."
		},
		{
			image: dragons,
			text: "Dragon sighted."
		},
		{
			image: vikings,
			text: "Vikings (again)."
		},
		{
			image: coins,
			text: "Taxes collected."
		},
	]
	let randomNumber = Math.floor(Math.random() * notifications.length);
	const notifyMe = useSpring({
		translateY: props.notificationVisible ? 0 : -150,
	})
	return (
		<animated.div className='notification' style={notifyMe}>
			<img src={notifications[randomNumber].image} alt="" />
			<h2>{notifications[randomNumber].text}</h2>
			<button className="close">x</button>
		</animated.div>
	);
}

export default Notification;
