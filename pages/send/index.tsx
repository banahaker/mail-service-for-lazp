import axios from "axios";
import type { NextPage } from "next";
import { useState } from "react";
import apis from "../../apis";
import styles from "../../styles/Send.module.css";

const Send: NextPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [targetEmail, setTargetEmail] = useState("");
  const sendEmail = (title: string, content: string, email: string) => {
    if (title == "" || content == "" || email == "") return;
    const { TOKEN } = localStorage;
    axios
      .post(apis.Host + apis.Mail + `/${email}`, { title, content, TOKEN })
      .then((res) => {
        const data = res.data;
        if (data.status == "Succeed") {
          alert("Send Email Succeed");
          setTitle("");
          setTargetEmail("");
          setContent("");
        } else {
          alert("Send Email Fail:");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Server Fail");
      });
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.Send}>
        <h1>New Mail</h1>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setTargetEmail(e.target.value)}
        />
        <textarea
          name="content"
          id="content"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            sendEmail(title, content, targetEmail);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Send;
