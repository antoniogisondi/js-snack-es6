"use strict"
const bike = [
    {
        nome: 'Bianchi',
        peso: 15
    },
    {
        nome: 'Atala',
        peso: 10
    },
    {
        nome: 'Olmo',
        peso: 12
    },
    {
        nome: 'Bottecchia',
        peso: 11
    },
    {
        nome: 'Casati',
        peso: 17
    },
    {
        nome: 'Colnago',
        peso: 13
    },
]

console.log(bike)

let bici_piu_leggera = bike[0].peso
bike.forEach((massa) => {
    let {peso} = massa
    if(peso < bici_piu_leggera){
        bici_piu_leggera = massa 
    } 
})

console.log(bici_piu_leggera)
let {nome, peso} = bici_piu_leggera

console.log(`la bici più leggera è la ${nome}, con un peso di ${peso} kg`)
