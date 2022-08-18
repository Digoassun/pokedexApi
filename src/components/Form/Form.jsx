import React, { useState } from "react";
import Label from "../Label/Label";
import Input from "../Input/Input";
import S from "./Form.module.css";
import Button from "../Button/Button";

const Form = ({setInfos}) => {
  const [id, setId] = useState("");

  function handleId(e) {
    e.preventDefault();
    setId(e.target.value);
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  async function handleReq(e) {
    e.preventDefault();
    const response = await fetch(url);
    const json = await response.json();
    setInfos(json);
  }

  return (
    <div className={S.form}>
      <Label texto="Insira o ID" />
      <Input type="text" value={id} onChange={handleId} />
      <Button onClick={handleReq} />
    </div>
  );
};

export default Form;
