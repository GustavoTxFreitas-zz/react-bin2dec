import './index.css'

function Input(params) {
    return (
        <div className="InputContainer">
            <input
                value=""
                type="text"
                className="Input"
                autoFocus="autofocus"
                placeholder={params.placeholder} />
        </div>
    )
}

export default Input;

// inputElement.onkeyup = function() {
//     var dec = 0;
//     var bin = inputElement.value.trim();

//     for (var digits of bin) {
//         if(digits !== '0' && digits !== '1'){
//           return displayElement.innerText = 'non-binary';
//         }
//         dec = dec*2 + parseInt(digits);
//     }
//     return displayElement.innerText =  dec;
// }

// document.querySelector('#main').appendChild(inputElement);