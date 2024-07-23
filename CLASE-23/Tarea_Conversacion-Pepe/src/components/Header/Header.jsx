import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Header = ({contactData, backURL}) => {
  return (
    <div className="header" >
      <Link to={backURL || "/"}>{`⬅️`}</Link>
      <Link to={`/info/${contactData.id}`}>
        <img
          src={`/images/${contactData.profilePicture}`}
          style={{ width: "30px", borderRadius: "50%" }}
        />
        {contactData.name}
      </Link>
      🔍
    </div>
  );
};

export default Header;
