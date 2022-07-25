import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { partContext } from "../../partsContext";
import ToolsofBmw from "../ToolsofBmw/ToolsofBmw";
import "./PartList.css";

const PartsList = () => {
  const { parts, getAllParts } = useContext(partContext);
  const location = useLocation();
  let loc = location.pathname.slice(29, location.pathname.length);

  let lock = location.pathname.slice(8, location.pathname.length);
  let model = parseInt(lock);

  let local = loc.match(/[0-9]/g);
  let arr = local.join("");
  let arr1 = parseInt(arr);

  useEffect(() => {
    getAllParts();
  }, []);

  return (
    <div className="container">
      <div className="divskiy">
        {parts?.map((item) =>
          item.category == arr1 && item.car_model == model ? (
            <ToolsofBmw key={item.id} item={item} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default PartsList;
