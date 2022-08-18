import { useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import S from "./App.module.css";

function App() {

  const [infos, setInfos] = useState();
  console.log()
  return (
    <div className={S.app}>
      <Form setInfos={setInfos}/>
      <Card
        name={infos? infos.forms[0].name : ""}
        img={infos? infos.sprites.other.dream_world.front_default : ""}
        type={infos? infos.types[0].type.name: "" }
      />
    </div>
  );
}

export default App;
