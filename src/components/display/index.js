import './index.css';

function Display(params) {
    return (
        <div className="DisplayContainer">
            {params.bin ?
                <>
                    <div className="BinaryValue">
                        {params.bin}
                        <sub>
                            <small>(2)</small>
                        </sub>
                    </div>
                    <div className="DecimalValue">
                        {params.dec ? params.dec : "non-binary"}
                        <sub>
                            <small>(10)</small>
                        </sub>
                    </div></>
                :
                <>
                    <div className="DecimalValue">- - -</div>
                </>}
        </div>
    )
}

export default Display;
