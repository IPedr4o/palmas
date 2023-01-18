input.onSound(DetectedSound.Loud, function () {
    Palmas = !(Palmas)
    if (Palmas) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    } else {
        basic.clearScreen()
    }
})
let Palmas = false
input.setSoundThreshold(SoundThreshold.Loud, 132)
