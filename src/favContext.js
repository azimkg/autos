import React, { useReducer, useState } from "react";
import { calcSubPrice, calcTotalPrice } from "./helpers/calcPrice";
import { CASE_GET_CART } from "./helpers/cases";
export const favContext = React.createContext();

const INIT_STATE = {
  cart: {},
  favLength1: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_CART:
      return {
        ...state,
        cart: action.payload,
        favLength1: action.payload.products.length,
      };

    default:
      return state;
  }
};

const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getCart2() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    dispatch({
      type: CASE_GET_CART,
      payload: cart,
    });
  }

  function addProductToCart2(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price_kgs,
    };
    let isProductInCart = cart.products.some(
      (item) => item.item.id == newProduct.item.id
    );
    if (isProductInCart) {
      cart.products = cart.products.filter(
        (item) => item.item.id != newProduct.item.id
      );
    } else {
      cart.products.push(newProduct);
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function checkItemInCard2(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }
    let isProductInCart = cart.products.some((item) => item.item.id == id);
    return isProductInCart;
  }

  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }
    cart.products = cart.products.filter((item) => item.item.id != id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart2();
  }

  function changeProductCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }
    cart.products = cart.products.map((item) => {
      if (item.item.id == id) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart2();
  }

  return (
    <favContext.Provider
      value={{
        cart: state.cart,
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
