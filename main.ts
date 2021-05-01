// Cat is grumpy if you don't give her/him/them attention.
basic.showIcon(IconNames.Angry)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        // Cat is mad when shaken.
        basic.showIcon(IconNames.Asleep)
        music.playMelody("A B C5 B A - - - ", 500)
    } else if (input.isGesture(Gesture.FreeFall)) {
        // Cat is scared when falling.
        basic.showIcon(IconNames.Confused)
        music.playMelody("E F E F E - - - ", 500)
    } else if (input.isGesture(Gesture.ScreenDown)) {
        // Cat is happy when receiving a tummy-rub (upside-down).
        basic.showIcon(IconNames.Happy)
        music.playMelody("C D C - - - - - ", 500)
    } else {
        // Cat is grumpy when ignored.
        basic.showIcon(IconNames.Angry)
        soundExpression.yawn.playUntilDone()
    }
    basic.pause(1000)
})
