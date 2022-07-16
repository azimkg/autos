import React, { useContext, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { partContext } from "../../partsContext";
import "./Models.css";
const Models = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getAllModels, models, brands, getAllBrands } =
    useContext(partContext);
  const location = useLocation();
  let loc = location.pathname.slice(8, location.pathname.length);

  useEffect(() => {
    getAllBrands();
  }, []);

  useEffect(() => {
    setSearchParams({
      brand: loc,
    });
  }, []);

  useEffect(() => {
    getAllModels();
    window.scrollTo(0, 0);
  }, [searchParams]);

  return (
    <div className="container">
      {brands.map((item) =>
        item.id == loc ? (
          <h1 className="model__title">Каталог {item.brand_name} </h1>
        ) : null
      )}

      <div className="model__block">
        {models.map((item) =>
          loc == item.brand ? (
            <div className="model__item" key={item.id}>
              <Link
                className="model__link"
                to={`/models/${loc}/categories/${item.id}`}
              >
                {item.model_name}
              </Link>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Models;
