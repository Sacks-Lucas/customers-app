import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

const CustomerEdit = ({name,age,dni}) => {
    return (
        <div>
            <h2>Edicion del Cliente</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="dni">DNI: </label>
                    <Field name="dni" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad: </label>
                    <Field name="age" component="input" type="number"></Field>
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

const mapStateToProps= (state, props) =>({
    initialValues:props
})
const mapDispatchToProps= () => ({})

const CustomerEditForm = reduxForm({form: 'CustomerEdit'})(CustomerEdit)

export default connect(mapStateToProps,mapDispatchToProps) (CustomerEditForm)

// export default connect(mapStateToProps,mapDispatchToProps) (reduxForm({form: 'CustomerEdit'})(CustomerEdit))
