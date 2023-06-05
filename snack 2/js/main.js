"use strict"
let students = [
    {
        'nome': 'Marco della Rovere',
        'id': 213,
        'grades': 78
    },

    {
        'nome': 'Paola Cortellessa',
        'id': 110,
        'grades': 96
    },

    {
        'nome': 'Andrea Mantegna',
        'id': 250,
        'grades': 48
    },

    {
        'nome': 'Gaia Borromini',
        'id': 145,
        'grades': 74
    },

    {
        'nome': 'Luigi Grimaldello',
        'id': 196,
        'grades': 68
    },

    {
        'nome': 'Piero della Francesca',
        'id': 213,
        'grades': 78
    },

    {
        'nome': 'Marco della Rovere',
        'id': 102,
        'grades': 50
    },

    {
        'nome': 'Francesca da Polenta',
        'id': 120,
        'grades': 84
    }
]

const targhe = students.map((student) => student.nome.toUpperCase())
console.log(targhe)

const new_students = students.filter((student) => student.grades > 70)
console.log(new_students)

const new_list_students = students.filter((student) => {
    return student.grades > 70 && student.id > 120
})
console.log(new_list_students)
