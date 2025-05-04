
const base = 2;

const init = function () {
    /*reset outputs on load */
    let power = document.getElementById("power");
    power.innerHTML = "";

    let sum = document.getElementById("sum");
    sum.innerHTML = "";

    let addings = 0;

    let reset = document.getElementById("reset");
    const resetFunc = function(){
        power.innerHTML = "";
        sum.innerHTML = "";
        addings = 0;
    }
    reset.onclick = () => {
        resetFunc();
        // power.innerHTML = "";
        // sum.innerHTML = "";
        // addings = 0;
    }

    for (let index = 0; index <= 20; index++) {
        let choice = document.getElementById(`nr${index+1}`);
        let number = document.getElementById(`num${index+1}`);
        let corr = document.getElementById("corr");
        let choiceIn = number.innerHTML;
        choice.onclick = () => {
            if(!power.innerHTML){
                power.innerHTML += Math.pow(base, choiceIn);
            }else{
                power.innerHTML += " " + "+" + " " + Math.pow(base, choiceIn); 
            }
            
            addings += Math.pow(base, choiceIn);
        }
        
        corr.onclick = () => {
            if(power.innerHTML.indexOf("+") !== -1){
                //sum needs to be made before modifying string or total will be incorrect
                //made mistake initially doing substring then deduction...
            addings -= power.innerHTML.substring(power.innerHTML.lastIndexOf(" ")+1);
            power.innerHTML = power.innerHTML.substring(0, power.innerHTML.lastIndexOf(" +"));

            
            }else{
                //not happy with the hard reset for the single input corr, this feels better
                // resetFunc(); 

                power.innerHTML = "";
                addings = 0;
            }
            
        } 
        
    }

    let plus = document.getElementById("plus");

    plus.onclick = () => {
        sum.innerHTML = addings;
    }

}

window.onload = init;