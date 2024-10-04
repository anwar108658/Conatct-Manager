const FilterProductReducer = (state,action) => {
  switch (action.type) {
    case "SET_FILTER_DATA":
        return{
            ...state,
            products:action.payload
        }
        break;
  
    default:
        return state
        break;
  }
}

export default FilterProductReducer
