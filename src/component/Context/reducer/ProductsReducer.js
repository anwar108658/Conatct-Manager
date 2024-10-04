const ProductsReducer = (state,action) => {
    

    switch (action.type) {
        case "API_LOADING":
            return{
                ...state,
                isloading:true,
            }
            break;
        case "API_ERROR":
            return{
                ...state,
                isError:true,
            }
            break;
            case "API_DATA":
                const filterdData = action.payload.filter((CurrElem) => {
                    return CurrElem.featured === true;
                })
                return{
                    ...state,
                isError:false,
                isloading:false,
                products:action.payload,
                featureProducts:filterdData
            }
            break;
            case "API_SINGLE_DATA":
                return{
                    ...state,
                isError:false,
                isloading:false,
                singleProduct:action.payload,
            }
            break;
    
        default:
            return state
            break;
    }
}

export default ProductsReducer