input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < nomlancers; index++) {
        if (randint(1, 6) == 3) {
            nom_3 += 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(nom_3 / nomlancers)
})
let nom_3 = 0
let nomlancers = 0
nomlancers = 6000
nom_3 = 0
