import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <AddUser />
      <UsersList users={[]} />
    </div>
  )
}

export default App;
