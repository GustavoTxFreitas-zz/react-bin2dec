import './index.css';

function GlassContainer(params) {
    return (
        <section className="GlassContainer">
            {params.children}
        </section>
    )
}

export default GlassContainer;
