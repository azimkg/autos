import { Button, Input, Pagination } from "antd";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { partContext } from "../../partsContext";
import SearchCart from "./SearchCart";

const SearchByVin = () => {
  const { parts, getAllParts, pages } = useContext(partContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getAllParts();
  }, []);
  console.log(parts);
  const products = parts
    .filter((items) => {
      if (
        items.good_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        items.vincode.includes(searchValue)
      ) {
        return true;
      }
      return false;
    })
    .map((item) => (
      <div key={item.id}>
        <h1>{item.good_name}</h1>
        <h3>{item.vincode}</h3>
      </div>
    ));

  useEffect(() => {
    setSearchParams({
      search: searchValue,
      vincode: searchValue,
    });
  }, [searchValue]);

  useEffect(() => {
    getAllParts();
  }, [searchParams]);

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input.Search
          className="search__input"
          placeholder="Поиск по VIN-коду..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="esesse">
        {parts.map((item) => (
          <SearchCart key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchByVin;
