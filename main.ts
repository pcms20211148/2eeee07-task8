input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() == 0) {
        basic.showString("N")
        music.playMelody("C D E F G A B C5 ", 500)
    }
    if (input.compassHeading() == 90) {
        basic.showString("E")
        music.playMelody("C D E F G A B C5 ", 277)
    }
    if (input.compassHeading() == 180) {
        basic.showString("S")
        music.playMelody("C D E F G A B C5 ", 159)
    }
    if (input.compassHeading() == 270) {
        basic.showString("W")
        music.playMelody("C D E F G A B C5 ", 40)
    }
})
basic.forever(function () {
	
})
