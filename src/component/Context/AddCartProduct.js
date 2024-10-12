import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer/CartReducer";

const CartContext = createContext();
const getData = () => {
    let newData = JSON.parse(localStorage.getItem("cart"))
    if (newData == []) {
        return []
    }else {
        return newData
    }
}
const initialState={
    cart:[]
}
const CartProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const addToCart = (id,ccolor,amount,productsDetail) => {
        dispatch({type:"ADD_TO_CART",payload:{id,ccolor,amount,productsDetail}})
    }
    const deleteItem = (id) => {
        dispatch({type:"DELET_ITEM",payload:id})
    }
    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(state.cart))
    },[state.cart])
    const clearItem = () =>{
        dispatch({type:"CLEAR_CART"})
    }
    return <CartContext.Provider value={{...state,addToCart,clearItem,deleteItem}}>
        {children}
    </CartContext.Provider>
}
const useCartContext = () => {
    return useContext(CartContext)
}
export {CartProvider,useCartContext}