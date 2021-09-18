import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Posts from "./Post";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { firestore } from "./firebase";

function App(props) {
  let [textApp, setTextApp] = useState([]);
  return (
    <>
   
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/post">
            <Posts  setTextApp={setTextApp} />
          </Route>
          <Route path="/">
            <Home  textApp={textApp} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
