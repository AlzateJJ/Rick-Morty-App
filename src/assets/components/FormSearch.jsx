import { useRef } from "react"
import './styles/FormSearch.css'

// props es un objeto, y cada atributo del objeto son los parámetros que mando,
// por eso necesito {} para destructurar los valores que mando

const FormSearch = ( {valorInputSetter} ) => {

    const valorInput = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        valorInputSetter(valorInput?.current.value.trim())
        valorInput.current.value = ''
    }

    return (
        <form className="form" onSubmit = {handleSubmit}>
            <input className="form__input" ref={valorInput} type="text" />
            <button className="form__btn">Submit</button>
        </form>
    )
}

export default FormSearch