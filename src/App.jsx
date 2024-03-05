import { useState } from "react";
import Header from "./Views/Header";
import Home from "./Views/Home";

const App = () => {
  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return <>
  <Header/>
  <Home/>
  </>;
};

export default App;
