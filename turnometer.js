import config from "config.js"

const $time = document.querySelector("#time");
const $turn = document.querySelector("#turn");
const $phase = document.querySelector("#phase");

function update() {
	const now = Date.now();
	$time.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

	if(now < config.startTime || now > config.endTime) {
		$turn.innerText = "Game not in progress";
		$phase.innerText = "We'd love to megagame every day but alas we cannot.";
	} else {
		const currentPeriod = config.schedule.find(({starting}) => starting <= now);
		$turn.innerText = currentPeriod.turn;
		$phase.innerText = currentPeriod.phase;
	}
}

update();
setInterval(update, 1000);
