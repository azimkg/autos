import React, { useReducer, useState } from "react";
import { CASE_GET_CART } from "./helpers/cases";
export const favContext = React.createContext();

const INIT_STATE = {
  fav: {},
  favLength1: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_CART:
      return {
        ...state,
        fav: action.payload,
        favLength1: action.payload.favorite.length,
      };
    default:
      return state;
  }
};

const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function getCart2() {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        favorite: [],
      };
      localStorage.setItem("fav", JSON.stringify(fav));
    }
    dispatch({
      type: CASE_GET_CART,
      payload: fav,
    });
  }
  function addProductToCart2(product) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        favorite: [],
      };
    }
    let newProduct = {
      item: product,
      count: 1,
    };
    let isProduct = fav.favorite.some(
      (item) => item.item.id == newProduct.item.id
    );
    if (isProduct) {
      fav.favorite = fav.favorite.filter(
        (item) => item.item.id != newProduct.item.id
      );
    } else {
      fav.favorite.push(newProduct);
    }
    localStorage.setItem("fav", JSON.stringify(fav));
  }
  function checkItemInCard2(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        favorite: [],
        totalPrice: 0,
      };
    }
    let isProduct = fav.favorite.some((item) => item.item.id == id);
    return isProduct;
  }
  function deleteFromCart(id) {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        favorite: [],
        totalPrice: 0,
      };
    }
    fav.favorite = fav.favorite.filter((item) => item.item.id != id);
    localStorage.setItem("fav", JSON.stringify(fav));
    getCart2();
  }

  function changeProductCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        favorite: [],
        totalPrice: 0,
      };
    }
    fav.favorite = fav.favorite.map((item) => {
      if (item.item.id == id) {
        item.count = count;
      }
      return item;
    });
    localStorage.setItem("fav", JSON.stringify(fav));
    getCart2();
  }
  return (
    <favContext.Provider
      value={{
        fav: state.fav,
        favLength1: state.favLength1,
        getCart2,
        addProductToCart2,
        checkItemInCard2,
        deleteFromCart,
        changeProductCount,
      }}
    >
      {children}
    </favContext.Provider>
  );
};
export default FavContextProvider;
