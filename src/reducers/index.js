import { combineReducers } from "redux";
import {customers} from './customers'
import {reducer as reduxForm} from 'redux-form'
import { user } from "./user";

export default combineReducers({
    customers,
    form: reduxForm,
    user
})