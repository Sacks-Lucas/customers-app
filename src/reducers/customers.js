import {handleActions} from 'redux-actions'
import { DELETE_CUSTOMER, FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER } from '../constants'

const initialState=[]

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state,action)=>[...action.payload],
    [INSERT_CUSTOMER] :(state,action)=>[...state,action.payload],
    [UPDATE_CUSTOMER]: (state,action)=>{
        
        console.log("State",state)
        const customerPayload=action.payload
        const {id} = customerPayload
        const customers=state
        const newCustomers=customers.reduce((acc,customer)=>{
            console.log("acc",acc)
            if(customer.id===id){
                return [...acc, customerPayload]
            }else{
                return[...acc,customer]
            }
        },[])

        return newCustomers
    },
    [DELETE_CUSTOMER]: (state,action)=> state.filter(c=>c.id!==action.payload)
},initialState)
// export const customers = (state={},action) =>{

//     switch (action.type) {
//         case FETCH_CUSTOMERS:
//             return [...action.payload]
//         case INSERT_CUSTOMER:
//             return [...state,action.payload]
//         case UPDATE_CUSTOMER: {
//             const customerPayload=action.payload
//             const {id} = customerPayload
//             const customers=state
//             const newCustomers=customers.reduce((acc,customer)=>{
//                 if(customer.id===id){
//                     return [...acc, customerPayload]
//                 }else{
//                     return[...acc,customer]
//                 }
//             },[])
    
//             return newCustomers
//         }
//         default:
//             return state;
//     }
// }