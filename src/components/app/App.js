import "../../styles/App.css";
import Header from "../header/Header";

import Input from "../input/Input";
import { useState } from "react";
import Output from "../output/Output";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contributors from "../contributors/Contributors";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import "animate.css/animate.css";

const githubToken = '22c675b88a5caf180286fb706e3357bd31da006d';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `https://api.github.com/graphql?access_token=${githubToken}`,
  }),
});

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
          <ApolloProvider client={client}>
            <Output />
          </ApolloProvider>
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
