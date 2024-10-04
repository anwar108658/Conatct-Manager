import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from  "./reducer/ProductsReducer"

const AppContext = createContext();

const API = 'https://api.pujakaitem.com/api/products'

const initialState = {
    isloading:false,
    isError:false,
    products:[],
    featureProducts:[],
    singleProduct:{}
}


const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState)
    
    const getData = async (api) => {
        dispatch({type:'API_LOADING'})
        try {
            const res = await axios.get(api)
            const products = await res.data
            dispatch({type:'API_DATA',payload:products})
        } catch (error) {
            dispatch({type:'API_ERROR'})
        }
        // fetch(api)
        // .then((data) => data.json()) // In this senerio we can use .json() otherwise data not showing
        // .then((data) => console.log(data))
        // .catch((error) => console.log(error))
    }
    const getSingleData = async (api) => {
        dispatch({type:'API_LOADING'})
        try {
            const res = await axios.get(api)
            const singleProduct = await res.data
            dispatch({type:'API_SINGLE_DATA',payload:singleProduct})
        } catch (error) {
            dispatch({type:'API_ERROR'})
        }
    }

    useEffect(() => {
        getData(API)
    },[0])
    // console.log(state)
    return(
        <AppContext.Provider value={{...state,getSingleData}}>
            {children}
        </AppContext.Provider>
    );
}

const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider,useProductContext}