const FilterProductReducer = (state,action) => {
  switch (action.type) {
    case "SET_FILTER_DATA":
        return{
            ...state,
            products:action.payload,
            Allproducts:action.payload
        }
        break;
        case "SET_SELECTED":
          switch (action.payload) {
            case "lowest":
              return{
              ...state,
              products:[...state.products].sort((a,b) => a.price - b.price),
            }
            break;
          case "heighest":
            return{
              ...state,
              products:[...state.products].sort((a,b) => b.price - a.price),
            }
            break;
            case "a-z":
              return{
              ...state,
              products:[...state.products].sort((a,b) => a.name.localeCompare(b.name)),
            }
            break;
          case "z-a":
            return{
              ...state,
              products:[...state.products].sort((a,b) => b.name.localeCompare(a.name)),
            }
            break;
            
            default:
              return state
              break;
            }
            break;
            case "Set_SEARCH":
              let {name,value} = action.payload
                return{
                    ...state,
                    filter:{
                      ...state.filter,
                      [name]:value,
                    }
                }
                break;
                case "ONCHANGE_SEARCH": {
                  const { text,category,Company } = state.filter;
                  if (text) {
                    return {
                      ...state,
                      products: state.Allproducts.filter((item) =>
                        item.name.toLowerCase().includes(text.toLowerCase())
                    ),
                  };
                }
                if(category === "All" && Company === "All"){
                  return {
                    ...state,
                    products: [...state.Allproducts]
                  };
                }
                if(category !== "All"){
                  return {
                    ...state,
                    products: state.Allproducts.filter((item) => item.category === category)
                  };
                }
                if(Company !== "All"){
                  return {
                    ...state,
                    products: state.Allproducts.filter((item) => item.company === Company)
                  };
                }
                // if(category) {
                //   console.log("third")
                // }
              }
                break;
    default:
        return{
          ...state,
          products:[...state.Allproducts]
        }
        break;
  }
}

export default FilterProductReducer
