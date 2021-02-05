import './index.css'

function Input(params) {
    return (
        <div className="InputContainer">
            <input
                autoFocus
                type="text"
                className="Input"
                onChange={params.onchange}
                placeholder={params.placeholder} />
        </div>
    )
}

export default Input;
