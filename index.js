var input= document.getElementById('input');

var output= document.getElementById('result');
var inputType= document.getElementById('inputType');
var resultType= document.getElementById('resultType');

function myResult(){ 
    if (inputType.value === "centimeter" && resultType.value === "centimeter") {
        output.value = Number(input.value);
    }
    else if ((inputType.value === "centimeter" && resultType.value === "meter")) {
        output.value = Number(input.value)/100;
    }
    else if ((inputType.value === "centimeter" && resultType.value === "kilometer")) {
        output.value = Number(input.value)/1000;
    }
    if (inputType.value === "meter" && resultType.value === "meter") {
        output.value = Number(input.value);
    }
    else if ((inputType.value === "meter" && resultType.value === "centimeter")) {
        output.value = Number(input.value)*100;
    }
    else if ((inputType.value === "meter" && resultType.value === "kilometer")) {
        output.value = Number(input.value)/100;
    }
    if (inputType.value === "kilometer" && resultType.value === "kilometer") {
        output.value = Number(input.value);
    }
    else if ((inputType.value === "kilometer" && resultType.value === "centimeter")) {
        output.value = Number(input.value)*1000;
    }
    else if ((inputType.value === "kilometer" && resultType.value === "meter")) {
        output.value = Number(input.value)*100;
    }
    
    
 
 console.log(output.value)
}
