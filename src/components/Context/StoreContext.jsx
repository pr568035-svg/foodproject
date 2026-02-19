import { createContext, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});


  const processedFoodList = food_list.map((item) => ({...item,id: item._id || item.id,}));
  const addToCart = (itemId) => {setCartItems((prev) => ({...prev,[itemId]: prev[itemId] ? prev[itemId] + 1 : 1,}));};
 const removeFromCart = (itemId) => {setCartItems((prev) => ({...prev, [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0,}));};

const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

 
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const item = processedFoodList.find(
        (food) => String(food.id) === String(itemId)
      );
      if (item) {
        totalAmount += item.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list: processedFoodList,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
    getTotalAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
