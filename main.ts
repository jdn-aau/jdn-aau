let right_speed = 0
let left_speed = 0
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    left_speed = randint(-40, 40)
    right_speed = randint(-40, 40)
    cuteBot.motors(left_speed, right_speed)
    basic.pause(1000)
})
