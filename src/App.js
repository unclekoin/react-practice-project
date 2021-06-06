import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import "./App.css";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: userName,
          age: userAge,
          id: 'uid-' + Math.random().toString().replace(/\./, '')
        }
      ];
    })
  }

  return (
    <div className="app">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  )
}

export default App;
