import './index.css';

function Display(params) {
    return(
        <div className="DisplayContainer">
            <span className="DisplayValue">{params.value}</span>
        </div>
    )
}

export default Display;
