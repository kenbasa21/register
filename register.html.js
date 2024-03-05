//console.log("Hello World.", 43, 409.23, true, false, ["banana", 43, true]);

// string = "Hiro", "Miorine", "20"
// number = 12345, 40.2 60.4
// boolean = true, false, 1 or 0 -1 = false, >0
// object = ["Apple","Banana", "Grapes"]
// [1, 2, 3, 4]

// undefiend= null

//console.log("Hello World."),123,true, ["apple", "banana"]
//console.error("Hello World")
//console.warn("Hello World")
//console.table(["Hiro", "Miorine","Shizuka","Frieren"])

let txtUsername = document.querySelector("#txtUsername");
let btnRegister = document.querySelector("#btnRegister");

btnRegister.onclick = function () {
    register (txtUsername.value)
}

function register (username) {
    console.log(username);
}