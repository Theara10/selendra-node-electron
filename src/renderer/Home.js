import React, { useState } from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

export function Home() {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    window.myApp.sendNodeName(name);
    // ipcRenderer.send("asynchronous-message", name);
  };
  return (
    <div style={{ margin: 20 }}>
      <h2>Selendra Node App</h2>
      <form onSubmit={handleSubmit}>
        <label>Node Name: </label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      {/* <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            height="50"
            width="auto"
            alt="example"
            src="https://i.guim.co.uk/img/media/ec27f69b7e4ac14838e8f71842a4cc6db3b8d69c/112_4_1179_708/master/1179.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1cb08a39c5acdc58423974865c54d7f7"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card> */}
      <Button type="primary" size={"large"} style={{ marginTop: 20 }}>
        Button
      </Button>
    </div>
  );
}
