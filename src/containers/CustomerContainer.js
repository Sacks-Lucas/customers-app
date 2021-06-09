import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCustomerByDni } from '../selectors/customers'
import { Route, withRouter } from 'react-router'
import AppFrame from '../components/AppFrame'
import CustomerEdit from '../components/CustomerEdit'
import CustomerData from '../components/CustomerData'

class CustomerContainer extends Component {
    
    static propTypes = {
        dni:PropTypes.string.isRequired,
        customer:PropTypes.object.isRequired,
    }
    handleOnBack = () =>(
        this.props.history.goBack()
    )
    handleSubmit = values =>(
        console.log(JSON.stringify(values))
    )

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({match}) => {
                console.log(match)
                const CustomerControl= match ? CustomerEdit : CustomerData
                return <CustomerControl {...this.props.customer} onSubmit={this.handleSubmit} onBack={this.handleOnBack}/> 
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
const mapDispatchToProps= () => ({})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CustomerContainer))
// export default connect(mapStateToProps,mapDispatchToProps)(CustomerContainer) 