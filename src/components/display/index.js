import './index.css';

function Display(params) {
    return(
        <div className="DisplayContainer">
            <span className="DisplayValue">{params.children}</span>
        </div>
    )
}

export default Display;
