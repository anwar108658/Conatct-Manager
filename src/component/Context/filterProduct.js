import { useContext, useEffect, useReducer } from "react";
import {createContext} from "react"
import {useProductContext} from "./ContextProduct"
import reducer from "./reducer/FilterProductReducer"

const FilterContext = createContext();
const initialState = {
    products:[]
}
export const FilterProductContext = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const {products} = useProductContext()
    useEffect(() => {
        dispatch({type:"SET_FILTER_DATA",payload:products})
    },[products])
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return <FilterContext.Provider value={{...state,handleChange}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}