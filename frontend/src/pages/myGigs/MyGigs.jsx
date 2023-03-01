import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
const MyGigs = () => {
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
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/delete.png" className="delete" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/delete.png" className="delete" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/delete.png" className="delete" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/delete.png" className="delete" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/delete.png" className="delete" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/delete.png" className="delete" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
