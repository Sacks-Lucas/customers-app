import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions/fetchCustomers'
import { getCustomers } from '../selectors/customers'

class CustomersContainer extends Component {
    
    componentDidMount() {
        if(this.props.customers.length===0){
            this.props.fetchCustomers()
        }
    }
    
    handleAddNew = () =>{
        this.props.history.push('/customers/new')
    }
    renderBody = customers =>(
        <React.Fragment>
            <CustomersList customers={customers} urlPath={'customers/'}></CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </React.Fragment>
    )

    render() {
        const {customers}=this.props
        return (
            <div>
                <AppFrame header="Listado de Clientes"
                            body={
                                this.renderBody(customers)
                            }>
                </AppFrame>
            </div>
        )
    }
}

CustomersContainer.propTypes = {
    fetchCustomers:PropTypes.func.isRequired,
    customers:PropTypes.array.isRequired,
}

CustomersContainer.defaultProps={
    customers: [ ]
}

const mapStateToProps = state => ({
    customers:getCustomers(state)
});
const mapDispatchToProps = dispatch => ({
    fetchCustomers: () => dispatch(fetchCustomers())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (CustomersContainer))