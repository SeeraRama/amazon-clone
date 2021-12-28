export const initialState = {
  basket: [],
  total: 0,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log(action);
      return {
        ...state,
        basket: [...state.basket, action.item],
        total: state.total + action.item.price,
      };
    case "REMOVE_FROM_BASKET":
      const { payload } = action;
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === payload.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);

        return {
          ...state,
          basket: newBasket,
          total: state.total - payload.price,
        };
      } else {
        console.warn(`can't remove items from basket.`);
        return state;
      }
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
