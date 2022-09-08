import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigage = useNavigate();

  const clickHandle = () => {
    navigage("/order-summary", {
      replace: true,
    });
  };

  return (
    <>
      <h1>Home Page</h1>
      <br />
      <button onClick={clickHandle}>Place order</button>
    </>
  );
};
