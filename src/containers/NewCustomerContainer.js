import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomerEdit from '../components/CustomerEdit'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {insertCustomer} from '../actions/insertCustomer'
import { SubmissionError } from 'redux-form'

class NewCustomerContainer extends Component {
    static propTypes = {
        insertCustomer:PropTypes.func.isRequired,
    }

    handleOnBack= () =>(
        this.props.history.goBack()
    )
    
    handleOnSubmitSuccess = () =>(
        this.props.history.goBack()
    )

    handleSubmit = values =>(
        this.props.insertCustomer(values).then(r=>{
                if(r.payload && r.payload.error){
                    throw new SubmissionError(r.payload)
                }
            }
        )
    )

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
                            onSubmitSuccess={this.handleOnSubmitSuccess}
                            onBack={this.handleOnBack}/>
    }

    render() {
        return (
            <div>
                <AppFrame header={'Creacion de nuevo cliente'}
                            body={this.renderBody()}>
                </AppFrame>
            </div>
        )
    }
}

const mapStateToProps = () =>({})

const mapDispatchToProps = dispatch => ({
    insertCustomer: () => dispatch(insertCustomer())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NewCustomerContainer))