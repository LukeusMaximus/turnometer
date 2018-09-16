import config from "./config.js"

const $time = document.querySelector("#time");
const $timeContainer = document.querySelector("#time-container");
const $turn = document.querySelector("#turn");
const $turnContainer = document.querySelector("#turn-container");
const $phase = document.querySelector("#phase");
const $phaseContainer = document.querySelector("#phase-container");

function formatCurrentTimeFromDate(date) {
	let hour = `${date.getHours()}`;
    let minute = `${date.getMinutes()}`;
    let second = `${date.getSeconds()}`;
	if(hour.length === 1) {
		hour = `0${hour}`;
	}
    if(minute.length === 1) {
        minute = `0${minute}`;
    }
    if(second.length === 1) {
        second = `0${second}`;
    }
    return `${hour}:${minute}:${second}`;
}

// Sets the text of an SVG element then makes the element fill the SVG container perfectly
const TEXT_EDGE_SPACING = 1;

function setSVGText($container, $text, str) {
	$text.textContent = str;
	const bbox = $text.getBBox();
	const viewbox = $container.viewBox.baseVal;
	viewbox.x = bbox.x - TEXT_EDGE_SPACING;
	viewbox.y = bbox.y - TEXT_EDGE_SPACING;
	viewbox.width = bbox.width + 2 * TEXT_EDGE_SPACING;
	viewbox.height = bbox.height + 2 * TEXT_EDGE_SPACING;
}

function update() {
	const now = new Date();
    setSVGText($timeContainer, $time, formatCurrentTimeFromDate(now));

	if(now < config.startTime || now > config.endTime) {
		setSVGText($turnContainer, $turn, "Game not in progress");
		setSVGText($phaseContainer, $phase, "We'd love to megagame every day but alas we cannot.");
	} else {
		const currentPeriod = config.schedule.find(({starting}) => starting <= now);
        setSVGText($turnContainer, $turn, currentPeriod.turn);
        setSVGText($phaseContainer, $phase, currentPeriod.phase);
	}
}

update();
setInterval(update, 1000);
