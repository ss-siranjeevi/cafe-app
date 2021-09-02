import React from "react";
import "./App.css";
import { Switch, Route, HashRouter } from "react-router-dom";
import CafeForm from "./component/CafeForm";
import CafeTable from "./component/CafeTable";

function App() {
  console.log(process.env.API_KEY)
  return (
    <div className="App">
      <HashRouter>
      <React.Suspense fallback="">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <CafeForm {...props} />}
          />
          <Route exact path="/cafe" render={props=><CafeTable {...props}/>}/>
        </Switch>
        </React.Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
