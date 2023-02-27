import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Careers</span>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Joberr</span>
            <span>Buying on Joberr</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Joberr</h2>
            <span>Joberr Business</span>
            <span>Joberr Pro</span>
            <span>Joberr Logo Maker</span>
            <span>Joberr Guides</span>
            <span>Get Inspired</span>
            <span>Joberr Select</span>
            <span>
              ClearVoice <p>Content Marketing</p>
            </span>
            <span>
              Joberr Workspace <p>Invoice Software</p>
            </span>
            <span>
              Learn <p>Online Courses</p>
            </span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>joberr</h2>
            <span>© Joberr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="socials">
              <Link>
                <img src="/imgs/facebook.png" alt="facebook" />
              </Link>
              <Link>
                <img src="/imgs/instagram.png" alt="" />
              </Link>
              <Link>
                <img src="/imgs/pinterest.png" alt="" />
              </Link>
              <Link>
                <img src="/imgs/twitter.png" alt="" />
              </Link>
              <Link>
                <img src="/imgs/linkedin.png" alt="" />
              </Link>
            </div>
            <div className="link">
              <img src="/imgs/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/imgs/coin.png" alt="" />
              <span>US$ USD</span>
            </div>
            <img src="/imgs/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
