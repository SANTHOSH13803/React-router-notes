// Search params is generally used for writing query parameter in React
import React from "react";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // useSearchParams gives a value and function same like useState hook
  //we need to pass the query parameters as object to setMethod.
  // this parameters will effect the url
  // useSearchParams has a method 'get', which helps us to search the query params.
  const activeUsers =
    searchParams.get("filter") === "active" ? <h1>Active Users</h1> : null;

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setSearchParams({ filter: "active" });
        }}
      >
        Active users
      </button>
      <button type="button" onClick={() => setSearchParams({})}>
        Reset Filter
      </button>
      {activeUsers}
    </div>
  );
};

export default Users;
