import { useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import S from "./App.module.css";

function App() {

  const [infos, setInfos] = useState();
  return (
    <div className={S.app}>
      <Form setInfos={setInfos}/>
      <Card
        name    
        img={infos? infos.sprites.other["official-artwork"].front_default : ""}
        type={infos? infos.types[0].type.name.toUpperCase() : "" }
      />
    </div>
  );
}

export default App;
