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
import { SubmissionError } from 'redux-form'
import { deleteCustomer } from '../actions/deleteCustomer'

class CustomerContainer extends Component {
    
    static propTypes = {
        dni:PropTypes.string.isRequired,
        customer:PropTypes.object,
        fetchCustomers:PropTypes.func.isRequired,
        updateCustomer:PropTypes.func.isRequired,
        deleteCustomer:PropTypes.func.isRequired,
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
        return this.props.updateCustomer(id,values).then(r=>{
            if(r.payload && r.payload.error){
                throw new SubmissionError(r.payload)
            }
        })
    }

    handleOnSubmitSuccess = () =>(
        this.props.history.goBack()
        )
        
    handleOnDelete = id =>{
        this.props.deleteCustomer(id).then(v=>{
        this.props.history.goBack()})
    }

    renderCustomerControl= (isEdit, isDelete) =>{
        if(this.props.customer){
            const CustomerControl= isEdit ? CustomerEdit : CustomerData
            return <CustomerControl {...this.props.customer} onSubmit={this.handleSubmit} onSubmitSuccess={this.handleOnSubmitSuccess} onBack={this.handleOnBack} isDeleteAllow={!!isDelete} onDelete={this.handleOnDelete}/> 
        }
        return null;
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({match:isEdit}) => (
                <Route path="/customers/:dni/del" children={
                    ({match: isDelete})=>(this.renderCustomerControl(isEdit,isDelete))
                }/>)
        } />
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
    updateCustomer: (id,values) => dispatch(updateCustomer(id,values)),
    deleteCustomer: (id) => dispatch(deleteCustomer(id))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CustomerContainer))
// export default connect(mapStateToProps,mapDispatchToProps)(CustomerContainer) 