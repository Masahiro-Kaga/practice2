import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");


  // Try to use fetch (fail/error) -------------------------------------------

  // const sendHttpRequest = (method, url, data) => {
  //   return fetch(url, {
  //     method: method,
  //     data: JSON.stringify(data),
  //     headers: data ? { "Content-Type": "application/json" } : {},
  //   }).then((response) => {
  //     if (response.status >= 400) {
  //       return response.json().then((errorResponseData) => {
  //         const error = new Error("Something wrong!");
  //         error.data = errorResponseData;
  //         throw error;
  //       });
  //     }
  //     return response.json();
  //   });
  // };

  // useEffect(() => {
  //   sendHttpRequest("GET", "http://localhost:4000/getUsers").then(
  //     (response) => {
  //       setListOfUsers(response.data);
  //     }
  //   );
  // }, []);

  // const createUser = () => {
  //   sendHttpRequest("POST", "http://localhost:4000/createUser", {
  //     name,
  //     age,
  //     username,
  //   }).then((response) => {
  //     setListOfUsers([...listOfUsers], {
  //       name,
  //       age,
  //       username,
  //     });
  //   });
  // };


  // Try to use Axios (success) -------------------------------------------

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
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
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
