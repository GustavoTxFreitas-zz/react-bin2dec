import './index.css';

function Text(params) {
    return(
        <div className="TextContainer">
            <h1 className={"Text " + params.className}>{params.children}</h1>
        </div>
    )
}

export default Text;
