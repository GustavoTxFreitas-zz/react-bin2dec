import './index.css'

function Input(params) {
    return (
        <div className="InputContainer">
            <label for={params.id} className="InputLabel">
                <small>{params.label || 'label'}</small>
            </label>
            <input
                autoFocus
                type="text"
                id={params.id}
                className="Input"
                onChange={params.onchange}
                placeholder={params.placeholder || 'placeholder'} />

        </div>
    )
}

export default Input;
