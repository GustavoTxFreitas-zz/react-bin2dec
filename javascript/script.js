var inputElement = document.createElement('input');
var displayElement = document.querySelector('span');

inputElement.setAttribute('autofocus', 'autofocus');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('placeholder', 'ex.: 100101010');

inputElement.style.width = '100%';
inputElement.style.height = '3em';
inputElement.style.border = 'none';
inputElement.style.padding = '0 2em';
inputElement.style.borderRadius = '2em';
inputElement.style.backgroundColor = '#051831';

displayElement.style.fontSize = '3.5em';


inputElement.onkeyup = function() {
    var dec = 0;
    var bin = inputElement.value.trim();

    for (digits of bin) {
        if(digits != '0' && digits != '1'){
          return displayElement.innerText = 'non-binary';
        }
        dec = dec*2 + parseInt(digits);
    }
    return displayElement.innerText =  dec;
}

document.querySelector('#main').appendChild(inputElement);
