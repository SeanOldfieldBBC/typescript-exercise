import React, { useEffect, useState } from "react";
import { fetchToDos, fetchUsers } from "./fetcher";
import { User, ToDo, UserWithToDos } from "./types";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((data: User[]) => {
      data.forEach((u: User) => {
        fetchToDos(u.id).then((toDos: ToDo[]) => {
          console.log(toDos);
        });
      });
      setUsers(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="ui container">
        <h1>Api App</h1>
        {users.map((user: User, index) => (
          <div key={index}>
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
