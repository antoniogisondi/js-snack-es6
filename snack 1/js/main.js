"use strict"
let ospiti = [
    {
        'nome': 'Brad Pitt',
        'tavolo': 1,
        'posto': 1
    },

    {
        'nome': 'Johnny Depp',
        'tavolo': 2,
        'posto': 6 
    },

    {
        'nome': 'Lady Gaga',
        'tavolo': 3,
        'posto': 2 
    },

    {
        'nome': 'Cristiano Ronaldo',
        'tavolo': 4,
        'posto': 9 
    },

    {
        'nome': 'Georgina Rodriguez',
        'tavolo': 4,
        'posto': 8 
    },

    {
        'nome': 'Chiara Ferragni',
        'tavolo': 5,
        'posto': 3 
    },

    {
        'nome': 'Fedez',
        'tavolo': 5,
        'posto': 4 
    },

    {
        'nome': 'George Clooney',
        'tavolo': 6,
        'posto': 2 
    },

    {
        'nome': 'Amal Clooney',
        'tavolo': 6,
        'posto': 3 
    },

    {
        'nome': 'Maneskin',
        'tavolo': 7,
        'posto': 5 
    },
]

ospiti.forEach((object) => {
    console.log(object.nome, 'tavolo: ' + object.tavolo, 'posto: ' + object.posto)
})

