import { useSelector } from "react-redux";

const Test = () => {
  const inputValue = useSelector((state) => state.header.headerShop);
  console.log(inputValue);
  return (
    <div>
      {inputValue}

    </div>
  );
};

export default Test;
