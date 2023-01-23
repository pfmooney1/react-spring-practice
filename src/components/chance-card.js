import { useSpring, animated } from '@react-spring/web';
function ChanceCard(props) {
	return (
		<animated.div className="chanceCard" style={props.flipOver} onClick={props.flipCard}>
			{props.flipped && <div className='chanceCardFront'>
				<h1>Advance to Go.</h1>
				<h3>(Collect $200)</h3>
			</div>}
			{!props.flipped && <div className='chanceCardBack'>
				<h1>CHANCE</h1>
			</div>}
		</animated.div>
	);
}

export default ChanceCard;
