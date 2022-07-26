import { Collapse } from "antd";
import React from "react";
import "./QA.css";
const { Panel } = Collapse;

const text = `
На сайте указаны сроки поставки заказанного товара до нашего
склада в г. Бишкек. Срок поставки товара считается в рабочих
днях, начиная со следующего дня после оплаты заказа. Более
подробно об этом в разделе сайта «Гарантии и условия ».
                
`;
const text2 = `
Запчасти – дубликаты, или неоригинальные запчасти – это автозапчасти, произведенные сторонним производителем автозапчастей, не являющимся производителем Вашего автомобиля. Нередко такие производители поставляют запчасти и на конвейер производителя, и в розничные магазины в собственной упаковке. Ничего страшного в этом нет. Detal.kg продает неоригинальные автозапчасти только проверенных и надежных производителей, которые выгодно отличаются по цене от оригинальных запчастей. Искать дубликаты оригинальных запчастей позволяет наша база кроссов – переходов с каталожного номера запчасти одного производителя на номер запчасти другого производителя, являющийся аналогом. Неоригинальные запчасти для Вашего автомобиля позволяют сэкономить существенную сумму денег при покупке, не экономя на качестве. О качестве и сроке службы неоригинальных запчастей того либо производителя Вы можете узнать у наших менеджеров.
                
`;
const text3 = `
Предоплата за заказ товара является гарантией, что заказанную
запчасть покупатель заберет у нас. При заказе предоплата
необходима, и вам придется приехать в наш магазин запчастей.
Хотя бы с целью познакомиться. Обычно предоплата за заказ
составляет от 50% до 100%, однако эта цифра может
варьироваться. В бланке заказа вы видите окончательную
стоимость заказанных запчастей, никаких доплат и наценок не
будет. При определенных условиях заказ может быть выполнен без
предоплаты.             
`;
const text4 = `
Свяжитесь с нами по телефону или напишите по e-mail. После
проверки данных, мы выставим оптовый уровень цен.
                
`;

const QA = () => (
  <div className="container qa">
    <h2 className="qa_title">Вопросы и Ответы</h2>
    <Collapse className="collapsed__accordeon" accordion>
      <Panel
        className="collapsed__panel"
        header="Какие сроки выполнения заказа после его оплаты?"
        key="1"
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header=" Чем неоригинальные запчасти отличаются от оригинальных запчастей"
        key="2"
      >
        <p>{text2}</p>
      </Panel>
      <Panel
        header="
                  Зачем нужна предоплата за заказ товара? Это же так неудобно!
                "
        key="3"
      >
        <p>{text3}</p>
      </Panel>
      <Panel
        header="
                 
                  Я хочу покупать запчасти оптом. Как это сделать?
                
                "
        key="4"
      >
        <p>{text4}</p>
      </Panel>
    </Collapse>
  </div>
);

export default QA;
