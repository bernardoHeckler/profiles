//profiles/src/pages/semantica.jsx

import './semantica.css'

import Main from './Main'
import fotoPerfil from '/public/fotoPerfil.jpeg'

function Semantica() {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Rubik:ital,wght@0,300..900;1,300..900&family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <div className="cor-fundo">
                <header className='container'>
                    <img src={fotoPerfil} alt="foto" />
                    <h1>Bernardo Heckler</h1>
                    <h3>Front End Developer</h3>
                </header>
                <Main />
            </div>
        </>
    )
}
export default Semantica
