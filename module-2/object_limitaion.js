
//* each key of object is a string
const obj = {
nextLevel: {meta: "Much better than programming hero! "},
"Level-1": {meta: "It's the base of the level 2"},
true: {meta: "it's also a stirng not boolean"}
}


// accesing objets properties using dot notation 
console.log(obj.nextLevel);

//* but we cann't access string keys by dot notation

console.log(obj["Level-1"])
// prove of the argument, as we said each key of object is a string
console.log(obj["true"]);
console.log(obj["nextLevel"])

console.log(obj.true)

const newObj = {}



