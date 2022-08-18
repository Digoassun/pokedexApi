import React, { useState } from "react";
import S from "./Card.module.css";

const Card = ({ name, img, type }) => {

  return (
    <article className={S.article}>
      <h1>{name}</h1>
      <picture>
        <img className={S.img} src={img} alt="" />
      </picture>
      <h2>{type}</h2>
    </article>
  );
};

export default Card;
