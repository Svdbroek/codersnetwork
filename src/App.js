import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import DeveloperList from "./components/DeveloperList";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";
import Posts from "./components/Posts";
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import  deleteAccount  from "./components/DeleteAccount";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route path="/Developers" component={DeveloperList} />
        <Route path="/posts/:id" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/posts" component={Posts} />
        <Route path="/signup" component={SignUp} />
        <Route path="/delete" component={deleteAccount}/>
        <Route path="/developer/:id" component={ProfilePage}/> 
        <Route component={Homepage} /> {/* always do the default last, it's just like an actual switch :D*/}
      </Switch>
    </div>
  );
}

export default App;
