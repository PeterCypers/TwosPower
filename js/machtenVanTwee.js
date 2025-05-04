
const base = 2;

const init = function () {

    let power = document.getElementById("power");
    power.innerHTML = "";

    for (let index = 0; index <= 20; index++) {
        let choice = document.getElementById(`nr${index+1}`);
        let choiceIn = choice.innerHTML;
        choice.onclick = () => {
            power.innerHTML = Math.pow(base, choiceIn);
        }
        
    }
    /* initiele test om 1 element op te vullen na click */
    // let zero = document.getElementById("nr1");
    // let zeroIn = zero.innerHTML;
    // zero.onclick = () => {
    //     power.innerHTML = zeroIn;
    // }

    let reset = document.getElementById("reset");
    reset.onclick = () => {
        power.innerHTML = "";
    }

}    

window.onload = init;


/*
let collection = [];
"use text numbers to request specific numbered 2Pow"
for (let i = 0; i <= 20; i++){
    const power = Math.pow(2,i);
    collection.push(power);
    console.log(`2 tot de ${i === 1? i + "ste" : i + "de" } macht = ${power}`);
}
let zero = collection[0];
let one = collection[1];
let two = collection[2];
let three = collection[3];
let four = collection[4];
let five = collection[5];
let six = collection[6];
let seven = collection[7];
let eight = collection[8];
let nine = collection[9];
let ten = collection[10];
let eleven = collection[11];
let twelve = collection[12];
let thirteen = collection[13];
let fourteen = collection[14];
let fifteen = collection[15];
let sixteen = collection[16];
let seventeen = collection[17];
let eighteen = collection[18];
let nineteen = collection[19];
let twenty = collection[20]; 
*/

/*
let twenty1
let twenty2
let twenty3
let twenty4
let twenty5
let twenty6
let twenty7
let twenty8
let twenty9
let thirty
let forty
let fifty
let sixty
let seventy
let eighty
let ninety 
*/