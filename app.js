function printHello(){
    console.log("Hello from js console");
}

printHello();


const buttonToogleBgColor = document.querySelector('#toggleBbColor');
const buttonToggleDisable = document.querySelector('#toggleDisable');

let toggle = function(){
    buttonToogleBgColor.classList.toggle('altColor');
}

let disableToggle = function(){
    // papilduzdevums: nomainīt pogas tekstu (Enable/Disable), mainot disable statusu
    if (buttonToogleBgColor.disabled){
        buttonToogleBgColor.disabled = false;
    } else {
        buttonToogleBgColor.disabled = true;
    }
    // buttonToogleBgColor.setAttribute('disabled', true); // var izmantot arī šo tehniku
}

buttonToogleBgColor.addEventListener('click', toggle);
buttonToggleDisable.addEventListener('click', disableToggle);

