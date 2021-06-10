import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomerEdit from '../components/CustomerEdit'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class NewCustomerContainer extends Component {
    static propTypes = {
        
    }

    handleOnBack= () =>{
        this.props.history.goBack()
    }

    handleOnSubmitSuccess= () =>{

    }

    handleSubmit = () =>{

    }

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

const mapDispatchToProps = () => ({})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NewCustomerContainer))