const config = {
    dateStr: "2019-03-09",
    startTimeStr: "09:30",
    endTimeStr: "17:00",
    defaultPeriodConf: {
    turn: "Game not in progress",
        phase: "We'd megagame every day if we could.",
        phaseTextColour: "white",
        phaseBackingColour: "black"
    },
    defaults: {
        phaseTextColour: "white",
        phaseBackingColour: "black"
    },
    schedule: [
        {
            startingStr: "09:30",
            turn: "Welcome",
            phase: "Arrival and registration"
        },
        {
            startingStr: "10:00",
            turn: "Briefing",
            phase: "Welcome and Introductory Briefing"
        },
        {
            startingStr: "10:15",
            turn: "Planning",
            phase: "Plan for the first turn"
        },

        {
            startingStr: "10:30",
            turn: "Turn 1",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "10:48",
            turn: "Turn 1",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "11:00",
            turn: "Turn 2",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "11:18",
            turn: "Turn 2",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "11:30",
            turn: "Turn 3",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "11:48",
            turn: "Turn 3",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "12:00",
            turn: "Turn 4",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "12:18",
            turn: "Turn 4",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "12:30",
            turn: "Turn 5",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "12:48",
            turn: "Turn 5",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "13:00",
            turn: "Turn 6",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "13:18",
            turn: "Turn 6",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "13:30",
            turn: "Turn 7",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "13:48",
            turn: "Turn 7",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff" 
        },

        {
            startingStr: "14:00",
            turn: "Turn 8",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "14:18",
            turn: "Turn 8",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "14:30",
            turn: "Turn 9",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "14:48",
            turn: "Turn 9",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "15:00",
            turn: "Turn 10",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "15:18",
            turn: "Turn 10",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "15:30",
            turn: "Turn 11",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "15:48",
            turn: "Turn 11",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "16:00",
            turn: "Turn 12",
            phase: "Action Phase",
            phaseBackingColour: "red"
        },
        {
            startingStr: "16:18",
            turn: "Turn 12",
            phase: "Team Phase",
            phaseBackingColour: "#5592ff"
        },

        {
            startingStr: "16:30",
            turn: "Debriefing",
            phase: "The game is over."
        }
    ]
};

config.date = new Date(config.dateStr);
config.startTime = new Date(`${config.dateStr}T${config.startTimeStr}`);
config.endTime = new Date(`${config.dateStr}T${config.endTimeStr}`);
for(const period of config.schedule) {
	period.starting = new Date(`${config.dateStr}T${period.startingStr}`)
}

export default config;
