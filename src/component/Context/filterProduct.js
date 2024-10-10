import { useContext, useEffect, useReducer } from "react";
import {createContext} from "react"
import {useProductContext} from "./ContextProduct"
import reducer from "./reducer/FilterProductReducer"

const FilterContext = createContext();
const initialState = {
    products:[],
    Allproducts:[],
    filter:{
        text:"",
        category:"All",
        Company:"All",
    }   
}
export const FilterProductContext = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const {products} = useProductContext()
    useEffect(() => {
        dispatch({type:"SET_FILTER_DATA",payload:products})
    },[products])
    const handleChange = (selected) => {
        dispatch({type:"SET_SELECTED",payload:selected})
    }
    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
     return dispatch({type:"Set_SEARCH",payload:{name,value}})
    }
    const blurHandel = () => {
        state.filter.text = '';
        state.filter.category = "All";
        state.filter.Company = "All";
        console.log(state.filter.category)
    } 
    useEffect(() => {
        dispatch({type:"ONCHANGE_SEARCH"})
    },[state.filter])
    return <FilterContext.Provider value={{...state,blurHandel,handleChange,updateFilterValue}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}