import type { NextPage } from "next";
import { useState } from "react";
import styles from "../../styles/Send.module.css";

const Send: NextPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className={styles.wrap}>
      <div className={styles.Send}>
        <h1>New Mail</h1>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          id="content"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Send;
