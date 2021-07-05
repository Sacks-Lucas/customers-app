import { CUSTOMER_LIST, CUSTOMER_VIEW } from "../constants/permissions";

export const user =(state,action)=>(
    {
        permissions:[CUSTOMER_LIST,CUSTOMER_VIEW]
    }
)