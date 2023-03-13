import { useQuery } from "@tanstack/react-query";
import React from "react";
import request from "../../utils/request";

const UserOrderTd = ({ id }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`${id}`],
    queryFn: () => request.get(`/users/${id}`).then((res) => res.data),
  });
  return (
    <td>
      {isLoading ? (
        "loading..."
      ) : error ? (
        "error"
      ) : (
        <span>{data.username}</span>
      )}
    </td>
  );
};

export default UserOrderTd;
