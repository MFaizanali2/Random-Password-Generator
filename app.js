
let input = document.getElementById("input");
// let length = 12;

function Generate(){
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let symbol = "@#$%^&*()_+}{|\/][~`.,?;:=-";
    let all = uppercase + lowercase + number + symbol;
    
    let replace = Math.random()*all.length;
    let round = Math.floor(replace);
    let some = all[round];
    
    let gen = document.querySelector("input");
    gen.innerText = some;

    // inputbox += Math.floor(Math.random()*uppercase.length);
    // inputbox += Math.floor(Math.random()*lowercase.length);
    // inputbox += Math.floor(Math.random()*number.length);
    // inputbox += Math.floor(Math.random()*symbol.length);
    // for(){
    //     inputbox += Math.floor(Math.random()*all.length);
    // }

    // inputbox += input;
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