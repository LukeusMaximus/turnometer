import config from "./config.js"

const $time = document.querySelector("#time");
const $timeBacking = document.querySelector("#time-backing");
const $timeContainer = document.querySelector("#time-container");
const $turn = document.querySelector("#turn");
const $turnContainer = document.querySelector("#turn-container");
const $phase = document.querySelector("#phase");
const $phaseBacking = document.querySelector("#phase-backing");
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

function setViewBox($container, rect) {
    const viewbox = $container.viewBox.baseVal;
    viewbox.x = rect.x - TEXT_EDGE_SPACING;
    viewbox.y = rect.y - TEXT_EDGE_SPACING;
    viewbox.width = rect.width + 2 * TEXT_EDGE_SPACING;
    viewbox.height = rect.height + 2 * TEXT_EDGE_SPACING;
}

function setTimeSVGText(str) {
	$time.textContent = str;

	const bbox = $time.getBBox();
	$timeBacking.setAttribute("d", `
		M ${bbox.x} ${bbox.y},
		l ${bbox.width} 0,
		l ${bbox.height} ${bbox.height},
		l ${-(bbox.width + 2 * bbox.height)} 0,
		Z
	`);

	setViewBox($timeContainer, {
		x: bbox.x - bbox.height,
		y: bbox.y,
		width: bbox.width + 2 * bbox.height,
		height: bbox.height
	});
}

function setTurnSVGText(str) {
    $turn.textContent = str;
    setViewBox($turnContainer, $turn.getBBox());
}

function setPhaseSVGText(str) {
	$phase.textContent = str;

	const bbox = $phase.getBBox();
    $phaseBacking.setAttribute("d", `
		M ${bbox.x - bbox.height} ${bbox.y},
		l ${bbox.width + 2 * bbox.height} 0,
		l ${-0.5 * bbox.height} ${0.5*bbox.height},
		l ${0.5 * bbox.height} ${0.5*bbox.height},
		l ${-(bbox.width + 2 * bbox.height)} 0,
		l ${0.5 * bbox.height} ${-0.5*bbox.height},
		Z
	`);

    setViewBox($phaseContainer, {
        x: bbox.x - bbox.height,
        y: bbox.y,
        width: bbox.width + 2 * bbox.height,
        height: bbox.height
    });

}

function update() {
	const now = new Date();
    setTimeSVGText(formatCurrentTimeFromDate(now));

    let currentPeriod = config.defaultPeriodConf;
	if(now > config.startTime && now < config.endTime) {
		currentPeriod = config.schedule.find(({starting}) => starting <= now);
	}

    setTurnSVGText(currentPeriod.turn);
    setPhaseSVGText(currentPeriod.phase);
}

update();
