function Warning() {

    return ( // displays a warning if screen too small
        <div style={{display: "flex", alignItems: "center", justifyContent: "center" }}>

            <section id="warning">
                <p>UH OH!<br />Your screen is too small to play.<br />Widen your window or switch to a larger device.</p>
            </section>

        </div>
        

    )
}

export default Warning;