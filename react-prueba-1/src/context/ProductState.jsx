import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import axios from "axios";

const initialState = {
  products: [],
};

export const ProductsContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });

    return res;
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
