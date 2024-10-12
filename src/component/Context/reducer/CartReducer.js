import React from 'react'

const CartReducer = (state,action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let {id,ccolor,amount,productsDetail} = action.payload
            let item = {
                id : id+ccolor,
                name : productsDetail.name,
                image:productsDetail.image[0].url,
                price:productsDetail.price,
                amount:amount,
                color: ccolor
            }
            return{
                cart:[...state.cart,item]
            }
            break;
            case "DELET_ITEM":
                return{
                    ...state,
                    cart:state.cart.filter((item) => item.id !== action.payload)
                }
                break;
            case "CLEAR_CART":
                return{
                    ...state,
                    cart:[]
                }
                break;
        default:
            return state
            break;
    }
}

export default CartReducer