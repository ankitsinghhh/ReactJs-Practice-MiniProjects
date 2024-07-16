import React from "react";
import Layout from "../Layout/Layout"
import { Link } from "react-router-dom";
// import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import Banner from '../images/career_one.png'
 
const Careers = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }} >
        <div className="headerContainer">
          <h1>Turn Your Passion <br/> into  career</h1>
          <p>Webbee will make your product look modern and <br/>professional  while saving you precious time.</p>
          <Link to="/about">
            <button>Join Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
 
export default Careers;