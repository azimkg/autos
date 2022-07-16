import { Button, Empty } from "antd";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NoData.css";

const NoData = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div
      className="noData"
      style={{
        margin: "100px 0",
      }}
    >
      <Empty />
      <Button className="btn-nodata" onClick={() => navigate(-1)}>
        Назад
      </Button>
    </div>
  );
};

export default NoData;
