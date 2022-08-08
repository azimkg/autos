import React, { useContext, useEffect, useState } from "react";
import { Empty, Input } from "antd";
import { useLocation, useSearchParams } from "react-router-dom";
import { partContext } from "../../partsContext";
import OneCategories from "./OneCategories";
import "./OneCategory.css";

const OneCategory = () => {
  const { parts, getAllParts, category, getAllCategories } =
    useContext(partContext);
  const location = useLocation();
  const loc = location.pathname.slice(10, location.pathname.length);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  console.log(category);
  useEffect(() => {
    getAllParts();
    getAllCategories();
   
  }, []);

  useEffect(() => {
    setSearchParams({
      search: searchValue,
    });
  }, [searchValue]);

  useEffect(() => {
    getAllParts();
    window.scrollTo(0, 0);
  }, [searchParams]);
  return (
    <div className="container">
      {category.map((item) =>
        item.id == +loc ? (
          <div className="category__breadCrumps">
            <h2 className="category__breadCrumps-title1">Категория /</h2>
            <h2 className="category__breadCrumps-title2">
              {item.category_name}
            </h2>
          </div>
        ) : null
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input.Search
          className="search__input"
          placeholder="Поиск..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="onecategories">
        {parts ? (
          parts.map((part) => (
            <OneCategories key={part.id} loc={loc} item={part} />
          ))
        ) : (
          <Empty description={false} />
        )}
      </div>
    </div>
  );
};

export default OneCategory;
