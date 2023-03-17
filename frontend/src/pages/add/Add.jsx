import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gigReducer, initialState } from "../../reducers/gigReducer";
import getCurrentUser from "../../utils/getCurrentUser";
import request from "../../utils/request";
import upload from "../../utils/upload";
import "./Add.scss";
const Add = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const [coverFile, setCoverFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = useReducer(gigReducer, initialState);
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: () => request.get("/categories").then((res) => res.data),
  });
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    const feature = e.target[0].value;
    if (feature === "") return;
    console.log(e.target[0].value);
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };
  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(coverFile);
      const imgs = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, imgs } });
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return request.post("/gigs", gig);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries(["myGigs"]);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    console.log(state);
    //navigate("/mygigs");
  };
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. I will do something i'm really good at"
              onChange={handleChange}
            />
            <label htmlFor="cat">Category</label>
            {isLoading ? (
              "loading..."
            ) : error ? (
              refetch()
            ) : (
              <select
                defaultValue={"DEFAULT"}
                name="cat"
                id="cat"
                onChange={handleChange}
              >
                <option value={"DEFAULT"} disabled>
                  Select Category
                </option>
                {data.map((c) => (
                  <option key={c?._id} value={c?.title}>
                    {c?.title}
                  </option>
                ))}
              </select>
            )}
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="cover">Cover Image</label>
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  onChange={(e) => setCoverFile(e.target.files[0])}
                />
                <label htmlFor="images">Upload Images</label>
                <input
                  type="file"
                  name="imgs"
                  id="images"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "uploading..." : "upload"}
              </button>
            </div>
            <label htmlFor="description">Description</label>
            <textarea
              name="desc"
              id="description"
              cols="30"
              rows="16"
              placeholder="Brief descriptions to introduce your services to your customers"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="right">
            <label htmlFor="serviceTitle">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              id="serviceTitle"
              placeholder="e.g. One-page web design"
              onChange={handleChange}
            />
            <label htmlFor="shortDesc">Short Description</label>
            <textarea
              name="shortDesc"
              id="shortDesc"
              cols="30"
              rows="10"
              onChange={handleChange}
              placeholder="Short description of your service"
            ></textarea>
            <label htmlFor="delivery">Delivery Time(e.g. 3 days)</label>
            <input
              type="number"
              name="deliveryTime"
              id="delivery"
              min={1}
              onChange={handleChange}
            />
            <label htmlFor="revision">Revision Number</label>
            <input
              type="number"
              name="revisionNumber"
              id="revision"
              onChange={handleChange}
            />
            <label htmlFor="">Add Features</label>
            <form className="add" onSubmit={handleFeature}>
              <input type="text" id="" placeholder="e.g. page design" />
              <button type="submit">Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((feature, i) => (
                <div className="item" key={i}>
                  <button
                    onDoubleClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: feature })
                    }
                  >
                    {feature}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id=""
              min={5}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
