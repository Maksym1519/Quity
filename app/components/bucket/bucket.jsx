import b from "./bucket.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { cardInfo } from "@/lib/features/card/cardSlice";
import { addToBucket } from "@/lib/features/card/cardSlice";
import { removeFromBucket } from "@/lib/features/card/cardSlice";
import { orderReduxInfo } from "@/lib/features/card/cardSlice";
import { clickBucketInfo } from "@/lib/features/card/cardSlice";
import { setClickBucket } from "@/lib/features/card/cardSlice";
import { setBucketLength } from "@/lib/features/card/cardSlice";

const Bucket = () => {
  const [orderBucket, setOrderBucket] = useState(true);
  const clickReduxBucket = () => {
    setOrderBucket(false);
  };
  //get-data-from-card-redux----------------------------------
  const [arrayGoods, setArrayGoods] = useState([]);
  const orderReduxInfo = useAppSelector(cardInfo);
  const clickBucket = useAppSelector(clickBucketInfo);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (clickBucket === true) {
      const payloadArray = Array.isArray(orderReduxInfo)
        ? orderReduxInfo
        : [orderReduxInfo];
      setArrayGoods(payloadArray);
      dispatch(setClickBucket(false));
    }
  }, [orderReduxInfo]);

  useEffect(() => {
    if (arrayGoods.length > 0) {
      dispatch(addToBucket(arrayGoods));
    }
  }, [arrayGoods, dispatch]);

  const currentArray = useAppSelector((state) => state.card.bucketGoods);

  // Фильтрация  null
  const filteredCurrentArray = currentArray.filter((item) => item !== null);

  const uniqueArray = Array.from(
    new Set(filteredCurrentArray.map((item) => item.id))
  ).map((id) => {
    return filteredCurrentArray.find((item) => item.id === id);
  });

  const filteredArray = uniqueArray.filter((item) => item !== null);

  filteredArray.map((item, index) => {
    return filteredArray.find((arrayItem) => arrayItem.id === index);
  });

   //set-sum-------------------------------------
  const [sum, setSum] = useState(() => {
    const initialSum = filteredArray.reduce((acc, item) => {
      return acc + item.attributes.price * item.quantity;
    }, 0);

    return initialSum;
  });

  const updateSum = () => {
    const newSum = filteredArray.reduce((acc, item) => {
      return acc + item.attributes.price * item.quantity;
    }, 0);
    setSum(newSum);
  };

  // Устанавливаем начальное количество товаров в корзине
  useEffect(() => {
    updateSum();
  }, [filteredArray]);

  // Обработчик увеличения количества товара
  const handleIncreaseQuantity = (item) => {
    dispatch(addToBucket([{ ...item, quantity: item.quantity + 1 }]));
    updateSum();
  };

  // Обработчик уменьшения количества товара
  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(addToBucket([{ ...item, quantity: item.quantity - 1 }]));
      updateSum();
    }
  };

  //delete-good-----------------------------------------------
  const handleRemoveItem = (item) => {
    dispatch(removeFromBucket(item));
    updateSum();
  };

  
  
  return (
    <>
      {orderBucket && (
        <div className={b.bucket__wrapper}>
          <div className={b.bucket__body}>
            <h3 className={b.mainTitle}>Корзина</h3>
            {filteredArray &&
              filteredArray.map((item, index) => (
                <div className={b.orderItem} key={index}>
                  <div className={b.orderItemInfo}>
                    <span className={b.goodTitle}>{item.attributes.title}</span>
                    <div
                      className={b.orderButtonDelete}
                      onClick={() => handleRemoveItem(item)}
                    >
                      Удалить
                    </div>
                  </div>
                  <div className={b.orderItemPrice}>
                    <div className={b.counterButtons}>
                      <div
                        className={b.buttonOperation}
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </div>
                      <div className={b.counterButtonsValue}>
                        <span>{item.quantity}</span>
                        <span>шт</span>
                      </div>
                      <div
                        className={b.buttonOperation}
                        onClick={() => handleIncreaseQuantity(item)}
                          >
                        +
                      </div>
                    </div>
                    <div className={b.orderButton}>Оформить</div>
                  </div>
                  <span className={b.price}>
                    Итого: {parseFloat(item.attributes.price) * parseFloat(( item.quantity !== 0 && item.quantity))}$
                  </span>
                </div>
              ))}

            <Image
              src={Icones.close}
              width={24}
              height={24}
              className={b.close}
              onClick={() => clickReduxBucket()}
            />
          </div>
          {uniqueArray.length === 0 && (
            <div className={b.emptyInfo}>Корзина пуста</div>
          )}
        </div>
      )}
    </>
  );
};
export default Bucket;