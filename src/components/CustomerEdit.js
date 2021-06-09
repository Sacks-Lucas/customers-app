import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial'

const isRequired = value =>(
    !value && "Este campo es requerido"
)

const isNumber = value =>(
    isNaN(Number(value))&& "El campo debe ser un numero"
)

const MyField = ({input,meta, type,label,name}) => (
    <div>
        <label htmlFor={name}>{label} </label>
        <input {...input} type={!type ?"text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
)

const CustomerEdit = ({name,age,dni}) => {
    return (
        <div>
            <h2>Edicion del Cliente</h2>
            <form action="">
                <div>
                    <Field name="name" component={MyField} type="text" validate={isRequired} label="Nombre:"></Field>
                </div>
                <div>
                    <Field name="dni" component={MyField} type="text" validate={[isRequired,isNumber]} label="DNI:"></Field>
                </div>
                <div>
                    <Field name="age" component={MyField} type="number" validate={isNumber} label="Edad:"></Field>
                </div>
            </form>
        </div>
    )
}

CustomerEdit.propTypes = {
    name:PropTypes.string,
    dni:PropTypes.string,
    age:PropTypes.number,
}


const CustomerEditForm = reduxForm({form: 'CustomerEdit'})(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm)

