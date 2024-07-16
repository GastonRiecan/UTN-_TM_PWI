import React, { useState } from 'react'

const ColorCardForm = ({handleSubmit}) => {
    const formSchema = {
        colors: 4,
        time: 'timestamp'
    } 
    const initialState = {
        time: 'pepe',
        color_1: '',
        color_2: '',
        color_3: '',
        color_4: ''
    }
    const [formValues, setFormValues ] = useState(initialState)
    
    const handleChangeFormValue = (e) => {
        const valueToChange = e.target.name
        const newValue = e.target.value

        setFormValues(
            {
                ...formValues,
                [valueToChange]: newValue
            }
        )
    }

    console.log(formValues) 



    const ColorsInputs = []
    for (let i = 1; i <= formSchema.colors; i = i + 1) {

        ColorsInputs.push(
            <div key={i}>
                <label htmlFor={"color_" + i}>Color {i}</label>
                <input name={'color_' + i} id={'color_' + i} type='text' value={formValues['color_' + i]} onChange={handleChangeFormValue}/>
            </div>
        )
        
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, {...formValues})}>
            <h2>Crea tu propia color card</h2>
            {ColorsInputs}
            <div>
                <label htmlFor='time'>Fecha</label>
                <input type={formSchema.time} name='time' id='time' onChange={handleChangeFormValue} value={formValues.time} />
            </div>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default ColorCardForm