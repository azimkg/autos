import {
  CarOutlined,
  FileOutlined,
  FileTextOutlined,
  LockOutlined,
  RetweetOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Row, Col, Alert } from "antd";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../authContext";
import { useNavigate } from "react-router-dom";
import "./Forma.css";

const App = () => {
  const { handleLogin, handleSignUp, error } = useContext(authContext);
  const navigate = useNavigate();
  const [isLoginForm, setIsLoginForm] = useState(false);
  function validatePassword(rule, value, callback) {
    let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    if (regex.test(value)) {
      callback();
    } else {
      callback(
        "Пароль должен содержать как минимум одну цифру, одну строчную, одну прописную, 8 из указанных символов"
      );
    }
  }

  const onFinish = (values) => {
    const { email, password } = values;
    if (isLoginForm) {
      handleLogin(email, password, navigate);
    } else {
      handleSignUp(email, password, navigate);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="form_wrap container">
        <div className="form_inner">
          <h3>
            <FileOutlined className="svg__form" />
            НОВЫЙ ПОКУПАТЕЛЬ
          </h3>
          <p>
            Создав учетную запись, вы сможете добавлять товары в корзину и
            отслеживать ранее добавленные товары.
          </p>
        </div>
        <div className="form_inner">
          <h3>
            <FileTextOutlined className="svg__form " />
            ПОСТОЯННЫЙ КЛИЕНТ
          </h3>

          <Row>
            <Col span={15}>
              {error ? <Alert description={error} type="error" /> : null}
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста введите вашу почту!",
                    },
                    {
                      type: "email",
                      message: "Почта введена некорректно!",
                    },
                  ]}
                >
                  <Input
                    className="form__login__password"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Введите email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста введите ваш пароль!",
                    },
                    {
                      validator: validatePassword,
                    },
                  ]}
                >
                  <Input
                    className="form__login__password"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Введите пароль"
                  />
                </Form.Item>

                <Form.Item>
                  <div>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      {isLoginForm ? "Вход" : "Регистрация"}
                    </Button>
                  </div>
                  <div>
                    {isLoginForm ? (
                      <>
                        Или
                        <span
                          className="isLogin"
                          onClick={() => setIsLoginForm(false)}
                        >
                          зарегистрируйтесь сейчас!
                        </span>
                      </>
                    ) : (
                      <>
                        Вы имеете аккаунт?
                        <span
                          className="isLogin"
                          onClick={() => setIsLoginForm(true)}
                        >
                          Войти
                        </span>
                      </>
                    )}
                  </div>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default App;
