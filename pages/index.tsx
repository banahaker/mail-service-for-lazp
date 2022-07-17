import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import apis from "../apis";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginRequest = (username: string, password: string) => {
    const userData = { username, password };
    axios
      .post(`${apis.Host}${apis.Auth}`, userData)
      .then((res) => {
        if (res.data.status == "succeed") {
          localStorage.setItem("TOKEN", res.data.TOKEN);
          router.push("/send");
        }
      })
      .catch((err) => {
        const errData = err.response.data;
        alert(errData.err);
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
