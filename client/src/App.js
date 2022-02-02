import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name ,setName] = useState("")
  const [age ,setAge] = useState("")
  const [username ,setUsername] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:4000/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:4000/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([...listOfUsers,{
        name,
        age,
        username,
      }]);
    });
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="name..." onChange={(event)=>{setName(event.target.value)}}/>
        <input type="text" placeholder="age..." onChange={(event)=>{setAge(event.target.value)}}/>
        <input type="text" placeholder="username..." onChange={(event)=>{setUsername(event.target.value)}}/>
        <button onClick={createUser}>Create User</button>
      </div>
      {listOfUsers.map((user, index) => {
        return (
          <div key={index}>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>Username:{user.username}</p>
            <hr></hr>
          </div>
        );
      })}

    </div>
  );
}

export default App;
