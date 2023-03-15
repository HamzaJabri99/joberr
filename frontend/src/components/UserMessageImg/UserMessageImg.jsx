import { useQuery } from "@tanstack/react-query";
import React from "react";
import request from "../../utils/request";

const UserMessageImg = ({ id }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`${id}`],
    queryFn: () => request.get(`/users/${id}`).then((res) => res.data),
  });

  return (
    <>
      {" "}
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <img
          src={data.img || "/imgs/noavatar.jpg"}
          alt=""
          title={data.username}
        />
      )}
    </>
  );
};

export default UserMessageImg;
