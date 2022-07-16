import {
  CarOutlined,
  FileOutlined,
  FileTextOutlined,
  LockOutlined,
  RetweetOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import "./Forma.css";

const App = () => {
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
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <div className="form_wrap container">
        <div className="form_inner">
          <h3>
            <FileOutlined />
            НОВЫЙ ПОКУПАТЕЛЬ
          </h3>
          <p>
            Создав учетную запись, вы сможете совершать покупки быстрее и
            отслеживать ранее сделанные заказы.
          </p>
        </div>
        <div className="form_inner">
          <h3>
            <FileTextOutlined />
            ПОСТОЯННЫЙ КЛИЕНТ
          </h3>
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
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Useremail"
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
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
          </Form>
          <Form.Item>
            <div>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {isLoginForm ? "Log in" : "Sign up"}
              </Button>
            </div>
            <div>
              {isLoginForm ? (
                <>
                  Или{" "}
                  <span
                    className="isLogin"
                    onClick={() => setIsLoginForm(false)}
                  >
                    зарегистрируйтесь сейчас!
                  </span>
                </>
              ) : (
                <>
                  Вы имеете аккаунт?{" "}
                  <span
                    className="isLogin"
                    onClick={() => setIsLoginForm(true)}
                  >
                    Log in
                  </span>
                </>
              )}
            </div>
          </Form.Item>
        </div>
      </div>
      <div className="form_bottom">
        <div className="form_bottom-wrapper">
          <div className="bottom_card">
            <CarOutlined className="bottom_card-img" />
            <div className="bottom_card-txt">
              <h4>БЕСПЛАТНАЯ ДОСТАВКА</h4>
              <p>This is the description</p>
            </div>
          </div>
          <div className="bottom_card">
            <TeamOutlined className="bottom_card-img" />
            <div className="bottom_card-txt">
              <h4>ОНЛАЙН ПОДДЕРЖКА</h4>
              <p>This is the description</p>
            </div>
          </div>
          <div className="bottom_card">
            <RetweetOutlined className="bottom_card-img" />
            <div className="bottom_card-txt">
              <h4>30 ДНЕЙ ВОЗВРАТ</h4>
              <p>This is the description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
