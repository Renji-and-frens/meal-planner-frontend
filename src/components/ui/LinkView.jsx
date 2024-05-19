import React from "react";
import { NavLink } from "react-router-dom";

import "./LinkView.css";

const LinkView = ({ title, linkInfoList }) => {
  return (
    <div className="linkView-container">
      <p className="link-title">{title}</p>
      <ul className="links-ul">
        {linkInfoList.map((link, index) => {
          console.log(link.url.replace(/\s/g, "-"));
          return (
            <li key={index}>
              <NavLink
                to={
                  link.text !== "Home"
                    ? `${link.url}${link.text
                        .toLowerCase()
                        .replace(/\s/g, "-")}`
                    : `${link.url}`
                }
                className={link.text}
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinkView;
