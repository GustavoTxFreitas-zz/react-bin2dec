import './index.css';

function AppContainer(params) {
    return (
        <section className="AppContainer">
            <div className="color"></div>
            <div className="color"></div>
            {params.children}
        </section>
    )
}

export default AppContainer;
