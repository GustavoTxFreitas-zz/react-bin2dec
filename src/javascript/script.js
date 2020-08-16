var inputElement = document.querySelector('input');
var displayElement = document.querySelector('span');

displayElement.style.fontSize = '3em';

inputElement.onkeyup = function() {
    var dec = 0;
    var bin = inputElement.value.trim();

    for (digits of bin) {
        if(digits != '0' && digits != '1'){
          return displayElement.innerText = 'non-binary';
        }
        dec = dec*2 + parseInt(digits)
    }
    return displayElement.innerText =  dec;
}
