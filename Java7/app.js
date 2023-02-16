// 1
let myNestedArray = [
    ["deep"],
    [["deeper"]],
    [[["deepest"]]],
]
console.log(myNestedArray)

// 2
let colors = [
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurqoise",
    "FireBrick",
]
colors.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
console.log(colors)

// 3
let spead0ut = ["to", "code"]
let speadout = ["Learning", ...spead0ut,"is", "fun"]
console.log(speadout)


