//profiles/src/pages/semantica.jsx

import './semantica.css'

import Button from './Button'

function Semantica() {
    return (
        <>
            <div className="cor-fundo">
                <header className='container'>
                    <img src="https://placehold.co/100x100" alt="foto" />
                    <h1>Nome Aqui</h1>
                    <h3>Função</h3>
                </header>
                <nav>
                    <figure href='#' alt="icone-esquerda">
                        <img src="https://placehold.co/40x40" alt="img40x40" />
                    </figure>
                    <figure src='#' alt="icone-direita">
                        <img src="https://placehold.co/40x40" alt="img40x40" />
                    </figure>
                </nav>
                <main>
                    <section>
                        <iframe
                            src="/src/pages/texto.html"
                        ></iframe>
                    </section>
                    <Button/>
                </main>

            </div>
        </>
    )
}
export default Semantica
