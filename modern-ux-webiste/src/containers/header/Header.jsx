import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt3__header-conter">
        <h1 className="gradient__text">
          Let's Build Something Amazing With GPT-3 OpenAI
        </h1>
        <div className="gpt3__header-content__input"></div>
      </div>
    </div>
  );
};

export default Header;
