const a =() => {
    console.log('a')
    b()
    
}
let num = 1
const b =() => {
    console.log("b")
    num++
    a()
}

a()
console.log(num)