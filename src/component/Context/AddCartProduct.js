import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer/CartReducer";

const CartContext = createContext();
const initialState={
    cart:[]
}
const CartProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const addToCart = (id,ccolor,amount,productsDetail) => {
        dispatch({type:"ADD_TO_CART",payload:{id,ccolor,amount,productsDetail}})
    }
    return <CartContext.Provider value={{...state,addToCart}}>
        {children}
    </CartContext.Provider>
}
const useCartContext = () => {
    return useContext(CartContext)
}
export {CartProvider,useCartContext}