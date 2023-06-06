"use strict"
const football_team = [
    {
        nome: 'Chelsea', 
        punti_fatti: 0, 
        falli_subiti: 0
    }, 
    {
        nome: 'Manchester City', 
        punti_fatti: 0, 
        falli_subiti: 0
    }, 
    {
        nome: 'Liverpool', 
        punti_fatti: 0, 
        falli_subiti: 0
    }, 
    {
        nome: 'Tottenham', 
        punti_fatti: 0, 
        falli_subiti: 0
    }, 
    {
        nome: 'Arsenal', 
        punti_fatti: 0, 
        falli_subiti: 0
    }, 
    {
        nome: 'West Ham', 
        punti_fatti: 0, 
        falli_subiti: 0
    },   
    {
        nome: 'Manchester United', 
        punti_fatti: 0, 
        falli_subiti: 0
    }, 
    {
        nome: 'Fulham', 
        punti_fatti: 0, 
        falli_subiti: 0
    }
]

const new_list_team = []

football_team.forEach((footballTeam) => {

    footballTeam.punti_fatti = Math.floor(Math.random()*100)
    footballTeam.falli_subiti = Math.floor(Math.random()*50)

    let new_list = {
        nome: footballTeam.nome,
        falli_subiti: footballTeam.falli_subiti
    }

    new_list_team.push(new_list)
})

console.log(football_team)
console.log(new_list_team)


