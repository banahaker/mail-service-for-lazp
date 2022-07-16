import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginRequest = (username: string, password: string) => {
    const requestData = {
      username,
      password,
    };
    console.log(requestData);
    axios
      .post("https://lazpserver.herokuapp.com/auth/", requestData)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <h1>Login to Mail</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => loginRequest(username, password)}>Login</button>
      </div>
    </div>
  );
};

export default Home;
