import React, { useEffect, useState } from "react";
import ChatApp from "./ChatApp";

const tabs = ["posts", "comments"];

export const UseEffect = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts);
      });
    document.title = title;
    console.log(title);
  }, [type]);

  const [countdown, setCountdown] = useState(100);
  useEffect(() => {
    setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);
  }, []);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  const [avatar, setAvatar] = useState();
  //cleanrup : tránh khi bị rỏ rỉ dữ liệu

  return (
    <div>
    <ChatApp/>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", background: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li>{post.body}</li>
        ))}
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </ul>
      <h1>{countdown}</h1>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="as" width="80%" />}
     
    </div>
  );
};
