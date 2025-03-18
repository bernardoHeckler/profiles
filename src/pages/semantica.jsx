//profiles/src/pages/semantica.jsx
function Semantica() {
    return (
        <>
            <header>
                <img src="https://placehold.co/100x100" alt="foto" />
                <h1>Nome Aqui</h1>
                <h3>Função</h3>
                <nav>
                    <figure href='#' alt="icone-esquerda">
                        <img src="https://placehold.co/40x40" alt="img40x40" />
                    </figure>
                    <figure src='#' alt="icone-direita">
                        <img src="https://placehold.co/40x40" alt="img40x40" />
                    </figure>
                </nav>
            </header>
            <main>
                <section>
                    <iframe
                        src="/src/pages/texto.html"
                    ></iframe>
                </section>
                <section>
                    <button type="button">
                        <a href="../assets/BERNARDO ANTUNES HECKLER CURRICULO .pdf" target="_blank" rel="noopener noreferrer">Currículo</a>
                    </button>
                    <button type="button">
                        <a href="https://www.linkedin.com/in/bernardo-heckler-645153305/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </button>
                    <button type="button">
                        <a href="https://github.com/bernardoHeckler" target="_blank" rel="noopener noreferrer">Git Hub</a>
                    </button>
                </section>
            </main >

        </>
    )
}
export default Semantica
