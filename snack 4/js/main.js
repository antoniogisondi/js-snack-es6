"use strict"
const football_team = [
    {
        team: 'Chelsea',
        punti: 0,
        falli_subiti: 0
    },
    {
        team: 'Manchester City',
        punti: 0,
        falli_subiti: 0
    },
    {
        team: 'Liverpool',
        punti: 0,
        falli_subiti: 0
    },
    {
        team: 'Tottenham',
        punti: 0,
        falli_subiti: 0
    },
    {
        team: 'Arsenal',
        punti: 0,
        falli_subiti: 0
    },
    {
        team: 'West Ham',
        punti: 0,
        falli_subiti: 0
    },
    {
        team: 'Manchester United',
        punti: 0,
        falli_subiti: 0
    },
    {
        team: 'Fulham',
        punti: 0,
        falli_subiti: 0
    }
]

let obj = football_team.map((team) => {
    team.punti = Math.floor(Math.random()*(100 - 3 + 1) + 3)
    team.falli_subiti = Math.floor(Math.random()*(30 - 1 + 1) + 1)
    console.log(team.falli_subiti)
})




