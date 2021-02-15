import "../../styles/App.css";
import Header from "../header/Header";

import Input from "../input/Input";
import { useState } from "react";
import Output from "../output/Output";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contributors from "../contributors/Contributors";

const App = () => {
  const [username, setUsername] = useState("saviomartin");

  const handleUserName = (username) => {
    setUsername(username);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <Header />
            <Input username={username} handleUserName={handleUserName} />
          </div>
        </Route>
        <Route path="/build/:username">
          <Header />
          <Output />
        </Route>
        <Route path="/contributors">
          <Header />
          <Contributors />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
