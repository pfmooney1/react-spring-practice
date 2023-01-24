import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
function ChanceCard(props) {
	const [flipped, toggleFlipped] = useState(false);
	let cards = [{
		textA: `Advance to Go.`,
		textB: `(Collect $200)`,
	},
	{
		textA: `Take a walk on the Boardwalk.`,
		textB: `Advance token to Boardwalk.`,
	},
	{
		textA: `Go to Jail. Go directly to Jail.`,
		textB: `Do not pass GO, do not collect $200.`,
	},
	{
		textA: `XMAS fund matures`,
		textB: `Collect $100`,
	},
	{
		textA: `Advance to Illinois Ave.`,
		textB: `If you pass Go, collect $200.`,
	},
	{
		textA: `Advance to St. Charles Place.`,
		textB: `If you pass Go, collect $200`,
	},
	{
		textA: `Advance token to the nearest Utility.`,
		textB: `If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total 10 (ten) times the amount thrown.`,
	},
	{
		textA: `Advance to the nearest Railroad.`,
		textB: `If unowned, you may buy it from the Bank`,
	},
	{
		textA: `Bank pays you dividend of $50.`,
		textB: ``,
	},
	{
		textA: `Get out of Jail Free.`,
		textB: `This card may be kept until needed, or traded/sold.`,
	},
	{
		textA: `Go Back Three Spaces.`,
		textB: ``,
	},
	{
		textA: `Make general repairs on all your property.`,
		textB: `For each house pay $25, For each hotel $100.`,
	},
	{
		textA: `Take a trip to Reading Railroad. `,
		textB: `If you pass Go, collect $200.`,
	},
	{
		textA: `You have been elected Chairman of the Board.`,
		textB: `Pay each player $50.`,
	},
	{
		textA: `Your building loan matures.`,
		textB: `Collect $150`,
	}
]
	function flipCard() {
		let prevValue = flipped;
		let newValue = !prevValue;
		toggleFlipped(newValue);
	}
	const flipOver = useSpring({
		transform: flipped ? "rotate3d(0, 1, 0, 1turn)" : "rotate3d(0, 1, 0, 0.5turn)"
	})
	let randomNumber = Math.floor(Math.random() * cards.length);
	return (
		<animated.div className="chanceCard" style={flipOver} onClick={flipCard}>
			{/* // ! ---------------------------
			// ! ---------------------------
			// ! -Make it so that it doesn't rerender: Opacity instead.
			// ! ---------------------------
			// ! --------------------------- 
			*/}
			{flipped && <div className='chanceCardFront'>
				<h1>{cards[randomNumber].textA}</h1>
				<h3>{cards[randomNumber].textB}</h3>
			</div>}
			{!flipped && <div className='chanceCardBack'>
				<h1>CHANCE</h1>
			</div>}
		</animated.div>
	);
}

export default ChanceCard;
