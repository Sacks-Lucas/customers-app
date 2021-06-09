import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCustomerByDni } from '../selectors/customers'
import { Route, withRouter } from 'react-router'
import AppFrame from '../components/AppFrame'
import CustomerEdit from '../components/CustomerEdit'
import CustomerData from '../components/CustomerData'
import { fetchCustomers } from '../actions/fetchCustomers'
import { updateCustomer } from '../actions/updateCustomer'

class CustomerContainer extends Component {
    
    static propTypes = {
        dni:PropTypes.string.isRequired,
        customer:PropTypes.object,
        fetchCustomers:PropTypes.func.isRequired,
        updateCustomer:PropTypes.func.isRequired,
    }

    componentDidMount() {
        if(!this.props.customer){
            this.props.fetchCustomers()
        }
    }

    handleOnBack = () =>(
        this.props.history.goBack()
    )
    handleSubmit = values =>{
        console.log(JSON.stringify(values))
        const {id}=values
        this.props.updateCustomer(id,values)
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({match}) => {
                if(this.props.customer){
                    const CustomerControl= match ? CustomerEdit : CustomerData
                    return <CustomerControl {...this.props.customer} onSubmit={this.handleSubmit} onBack={this.handleOnBack}/> 
                }
                return null;
            }
        }/>
    )

    render() {
        return (
            <div>
                <AppFrame header={`Cliente ${this.props.dni}`}
                            body={
                                this.renderBody()
                            }>
                </AppFrame>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => ({
    customer: getCustomerByDni(state,props)
})
const mapDispatchToProps= dispatch => ({
    fetchCustomers: () => dispatch(fetchCustomers()),
    updateCustomer: () => dispatch(updateCustomer())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CustomerContainer))
// export default connect(mapStateToProps,mapDispatchToProps)(CustomerContainer) 