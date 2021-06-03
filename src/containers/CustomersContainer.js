import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions'
import { withRouter } from 'react-router'

const customers =[
    {
        "dni":"27000000",
        "name":"Juan Perez",
        "age":37
    },
    {
        "dni":"30000000",
        "name":"Otro",
        "age":35
    },
    {
        "dni":"33000000",
        "name":"Luis Martinez",
        "age":32
    }
]

class CustomersContainer extends Component {
    handleAddNew = () =>{
        this.props.history.push('/customers/new')
    }
    renderBody = customers =>{
        <React.Fragment>
            <CustomersList customers={customers} urlPath={'customer/'}></CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </React.Fragment>
    }/*Me falla este metodo*/

    render() {
        return (
            <div>
                <AppFrame header="Listado de Clientes"
                            body={
                                // this.renderBody(customers)
                                <React.Fragment>
                                    <CustomersList customers={customers} urlPath={'customer/'}></CustomersList>
                                    <CustomersActions>
                                        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
                                    </CustomersActions>
                                </React.Fragment>
                            }>
                </AppFrame>
            </div>
        )
    }
}

export default withRouter(CustomersContainer)