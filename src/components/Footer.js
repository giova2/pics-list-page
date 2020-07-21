import React from "react";
import "./Footer.css";

const Footer = ({ numImages }) => {
  const renderFooter = () => {
    return numImages > 0 ? (
      <>
        <div className="ui divider"></div>
        <div className="footer">Found: {numImages} images</div>
      </>
    ) : (
      ""
    );
  };
  return renderFooter();
};

export default Footer;
