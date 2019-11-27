import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import DeveloperList from "./components/DeveloperList";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import  deleteAccount  from "./components/DeleteAccount";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route path="/Developers" component={DeveloperList} />
        <Route path="/read/:id" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/delete" component={deleteAccount}/>
        <Route component={Homepage} /> {/* always do the default last, it's just like an actual switch :D*/}
      </Switch>
    </div>
  );
}

export default App;
