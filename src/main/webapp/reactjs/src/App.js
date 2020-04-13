import React from 'react';
import {
    NavigationBar
} from "./componentes";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {
    TelaHome,
    TelaPesquisa
} from './telas'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <NavigationBar/>

              <Switch>
                  <Route exact path={"/"}>
                      <TelaHome/>
                  </Route>
                  <Route exact path={"/procura"}>
                      <TelaPesquisa/>
                  </Route>
              </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
