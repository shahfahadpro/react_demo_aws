import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  return <>User details: {params.userId}</>;
};
