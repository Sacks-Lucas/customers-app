import { Component } from "react"
import { connect } from "react-redux"

export const accessControl=permissionsRequired => WrappedComponent =>{
    const SecuredControl = class extends Component {
        render(){
            const {permissions}=this.props.user
            const isAllow=permissionsRequired.every(p=>permissions.indexOf(p) >= 0)
            if(!isAllow){
                return (<div><i>No tiene permisos de acceso</i></div>)
            }
            return <WrappedComponent {...this.props}/>
        }
    }

    const mapStateToProps= (state) =>({
        user:state.user
    })

    const mapDispatchToProps= () =>({})

    return connect(mapStateToProps,mapDispatchToProps) (SecuredControl)
}