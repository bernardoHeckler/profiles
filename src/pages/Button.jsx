import './Button.css'

const Button = () => {
    return (
        <div className='container-btns'>
            <section>
                <button type="button" className='color-btn1'>
                    <a href="../assets/BERNARDO ANTUNES HECKLER CURRICULO .pdf" target="_blank" rel="noopener noreferrer">Currículo</a>
                </button>
                <button type="button" className='color-btn2'>
                    <a href="https://www.linkedin.com/in/bernardo-heckler-645153305/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </button>
                <button type="button" className='color-btn3'>
                    <a href="https://github.com/bernardoHeckler" target="_blank" rel="noopener noreferrer">Git Hub</a>
                </button>
            </section>
        </div>
    )
}

export default Button
