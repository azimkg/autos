import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ResultError = () => (
  <Result
    status="403"
    title="403"
    subTitle="Простите, но такой страницы не существует"
    extra={
      <Link to={"/"}>
        <Button type="primary">Главная</Button>
      </Link>
    }
  />
);

export default ResultError;
