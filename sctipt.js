
function start() {

    
    const value = setInterval(() => {
        
        let num = parseInt(document.getElementById("num").innerText)    
        document.getElementById("num").innerText = ++num

    }, 1000)


    document.getElementById("stop").addEventListener("click", function () {
        clearInterval(value)
    })


    document.getElementById("reset").addEventListener("click", function () {
        clearInterval(value)
        document.getElementById("num").innerText = 0
        
    })







    // console.log(value)

}



function reset() {

}