import React, { useContext, useEffect } from "react";
import "./Categories.css";
import { partContext } from "../../partsContext";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { categories } from "../../helpers/categorie";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, getAllCategories } = useContext(partContext);
  const location = useLocation();
  let loc = location.pathname.slice(21, location.pathname.length);

  let local = loc.match(/[0-9]/g);
  let arr = local.join("");
  let arr1 = parseInt(arr);
  console.log(arr1);

  console.log(arr1);

  useEffect(() => {
    getAllCategories();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="categories_wrapper">
      <div className="categories_inner">
        <h2>Категории</h2>
        <div className="categories__card-wrapper">
          {categories.map((item) => (
            <Link
              to={`/models/${arr1}/categories/${item.id}/parts/${item.id}`}
              key={item.id}
            >
              <div className="categories_card-item">
                <img
                  src={item.img}
                  alt="image"
                  className=" categories_card-img"
                />
                <h3 className="category-item">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
