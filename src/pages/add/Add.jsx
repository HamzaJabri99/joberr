import React from "react";
import "./Add.scss";
const Add = () => {
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
              placeholder="I will do something i'm really good at"
            />
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="music">Music</option>
              <option value="design">Design</option>
              <option value="web developement">Web Developement</option>
              <option value="game developement">Game Developement</option>
            </select>
            <label htmlFor="cover">Cover Image</label>
            <input type="file" name="" id="cover" />
            <label htmlFor="images">Upload Images</label>
            <input type="file" name="" id="images" multiple />
            <label htmlFor="description">Description</label>
            <textarea
              name=""
              id="description"
              cols="30"
              rows="16"
              placeholder="Brief descriptions to introduce your services to your customers"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="serviceTitle">Service Title</label>
            <input
              type="text"
              name=""
              id="serviceTitle"
              placeholder="e.g. One-page web design"
            />
            <label htmlFor="shortDesc">Short Description</label>
            <textarea
              name=""
              id="shortDesc"
              cols="30"
              rows="10"
              placeholder="Short description of your service"
            ></textarea>
            <label htmlFor="delivery">Delivery Time(e.g. 3 days)</label>
            <input type="number" name="" id="delivery" min={1} />
            <label htmlFor="revision">Revision Number</label>
            <input type="number" name="" id="revision" />
            <label htmlFor="">Add Features</label>
            <input type="text" name="" id="" placeholder="e.g. page design" />
            <input
              type="text"
              name=""
              id=""
              placeholder="e.g. file uploading"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="e.g. setting up a domain"
            />
            <input type="text" name="" id="" placeholder="e.g. hosting" />
            <label htmlFor="price">Price</label>
            <input type="number" name="" id="" min={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
