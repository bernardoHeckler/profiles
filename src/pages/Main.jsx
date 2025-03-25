import { useState } from 'react';
import Button from './Button';
import Sobre from './Sobre';
import './Main.css';

import imgTerminal from '/public/iconeTerminal.png';
import imgRedes from '/public/iconeRedes.png';

const Main = () => {
    // Estado inicial com "sobre" selecionado e cor de fundo aplicada
    const [mostrarComponente, setMostrarComponente] = useState("sobre");
    const [botaoEsquerdoCor, setBotaoEsquerdoCor] = useState("");
    const [botaoDireitoCor, setBotaoDireitoCor] = useState("#1f1f1f");
    const [componenteCor, setComponenteCor] = useState("#1f1f1f");

    const handleBotaoEsquerdoClick = () => {
        setMostrarComponente('button');
        setBotaoEsquerdoCor('#1f1f1f');
        setBotaoDireitoCor('');
        setComponenteCor('#1f1f1f');
    };

    const handleBotaoDireitoClick = () => {
        setMostrarComponente('sobre');
        setBotaoEsquerdoCor('');
        setBotaoDireitoCor('#1f1f1f');
        setComponenteCor('#1f1f1f');
    };

    return (
        <div style={{ height: '264px' }}>
            <button
                className='btn-opcao'
                onClick={handleBotaoEsquerdoClick}
                style={{ backgroundColor: botaoEsquerdoCor }}
            >
                <img src={imgRedes} alt="envelope" />
            </button>
            <button
                className='btn-opcao'
                onClick={handleBotaoDireitoClick}
                style={{ backgroundColor: botaoDireitoCor }}
            >
                <img src={imgTerminal} alt="terminal" />
            </button>
            <div style={{ backgroundColor: componenteCor, borderRadius: '0 0 16px 16px' }}>
                {mostrarComponente === "button" && <Button />}
                {mostrarComponente === "sobre" && <Sobre />}
            </div>
        </div>
    );
};

export default Main;