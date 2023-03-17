import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import request from "../../utils/request";
import getCurrentUser from "../../utils/getCurrentUser";
const MyGigs = () => {
  const currentUser = getCurrentUser();
  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      request.get(`/gigs?userId=${currentUser._id}`).then((res) => res.data),
  });
  const clientQuery = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      return request.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      return clientQuery.invalidateQueries(["myGigs"]);
    },
  });
  const handleDelete = (id) => {
    mutation.mutate(id);
  };
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>My GIGS</h1>
          <Link to="/add" className="link">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td>loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td>error</td>
              </tr>
            ) : (
              data?.map((gig) => (
                <tr key={gig._id}>
                  <td>
                    <img src={gig.cover} alt="" />
                  </td>
                  <td>{gig.title}</td>
                  <td>{gig.price}</td>
                  <td>{gig.sales}</td>
                  <td>
                    <img
                      src="/imgs/delete.png"
                      className="delete"
                      alt=""
                      onClick={() => handleDelete(gig._id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
