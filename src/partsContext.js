import React, { useReducer } from "react";
import axios from "axios";
import {
  GET_ALL,
  GET_ALL_PARTS,
  GET_ONE_CATEGORY,
  GET_ONE_MODEL,
  GET_ONE_PART,
} from "./helpers/API";

export const partContext = React.createContext();

const API = "http://autoray.kg/api";

const INIT_STATE = {
  brands: [],
  models: [],
  category: [],
  parts: [],
  onePart: null,
  pages: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PARTS:
      return { ...state, brands: action.payload };
    case GET_ONE_MODEL:
      return { ...state, models: action.payload };
    case GET_ONE_CATEGORY:
      return { ...state, category: action.payload };
    case GET_ALL:
      return {
        ...state,
        parts: action.payload.data,
        pages: action.payload.headers["content-length"],
      };
    case GET_ONE_PART:
      return { ...state, onePart: action.payload };
    default:
      return state;
  }
};

const PartsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getAllBrands() {
    let { data } = await axios.get(`${API}/car_brands/`);
    dispatch({
      type: GET_ALL_PARTS,
      payload: data,
    });
  }

  async function getAllModels() {
    let { data } = await axios.get(`${API}/car_models/`);
    dispatch({
      type: GET_ONE_MODEL,
      payload: data,
      productsCount: 0,
    });
  }

  async function getAllCategories() {
    let { data } = await axios.get(
      `${API}/good_categories/` + window.location.search
    );

    dispatch({
      type: GET_ONE_CATEGORY,
      payload: data,
    });
  }

  async function getAllParts() {
    let res = await axios(`${API}/goods/` + window.location.search);
    // console.log(res);
    dispatch({
      type: GET_ALL,
      payload: res,
    });
  }

  async function getOneParts(id) {
    let { data } = await axios(`${API}/goods/${id}`);
    dispatch({
      type: GET_ONE_PART,
      payload: data,
    });
  }

  return (
    <partContext.Provider
      value={{
        brands: state.brands,
        models: state.models,
        category: state.category,
        parts: state.parts,
        onePart: state.onePart,
        productsCount: state.productsCount,
        pages: state.pages,
        getAllBrands,
        getAllModels,
        getAllCategories,
        getAllParts,
        getOneParts,
      }}
    >
      {children}
    </partContext.Provider>
  );
};
export default PartsContextProvider;
