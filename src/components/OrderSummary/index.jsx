import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <h1>Order Confirmed</h1>
      <button onClick={goBack}>Go back</button>
    </>
  );
};
