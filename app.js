
let input = document.getElementById("input");
let put = 12;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "@#$%^&*()_+}{|\/][~`.,?;:=-";
let all = uppercase + lowercase + number + symbol +1;

function Generate(){
    let input = document.getElementById("input");
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    for(let i = 1; i <= put; i++){
    all += all[Math.floor(Math.random()*all.length +2)]; 
    input.value = password; 
    }  
}

function copy(){
    let input = document.getElementById("input");
    input.select()
    document.execCommand("copy");
    
}

function Clear(){
    let input = document.getElementById("input");
    input.value ="";
}
// let replace = Math.random()*all.length;
// let round = Math.floor(replace);
// let some = all[round];

// let gen = document.querySelector("input");
// gen.innerText = console.log(some);

// inputbox += Math.floor(Math.random()*uppercase.length);
// inputbox += Math.floor(Math.random()*lowercase.length);
// inputbox += Math.floor(Math.random()*number.length);
// inputbox += Math.floor(Math.random()*symbol.length);
// for(){
//     inputbox += Math.floor(Math.random()*all.length);
// }

// inputbox += input;