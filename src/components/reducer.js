export const initialState = {
  basket:[],
  user:null
};

export const getBasketTotal = (basket)=>{
  return basket?.reduce((amount,item)=>item.price+amount,0);
}   //use reduce function to get the total of price, the second parameter is the inital value of amount


export const reducer = (state,action)=>{
  switch(action.type){
    case 'ADD_TO_BASKET':
      return ({
        ...state,
        basket:[...state.basket,action.item]
      })
    case 'REMOVE_FROM_BASKET':
      const index = state.basket?.findIndex(
        basketItem=>basketItem.id === action.id);
        let newBasket = [...state.basket];

      if(index >= 0){
        newBasket.splice(index,1);  //use splice to remove the index item
      }
      else{
        console.warn(`Can't remove product (id: ${action.id}) as its not in basket!`);
      }
      return {
        ...state,
        basket:newBasket
      }

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket:[]
      }
    case 'SET_USER':
      return {
        ...state,
        user:action.user
      }
    default:
      return state;
  }
}
