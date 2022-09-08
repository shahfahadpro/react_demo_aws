import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <h2>User 1 </h2>
      <h2>User 2 </h2>
      <h2>User 3 </h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filters</button>
      </div>

      <div>
        {showActiveUsers ? "Showing Active users" : "Showing all users"}
      </div>
    </>
  );
};
