import React, { useState } from "react";
import "./App.css";
import { Button } from "antd";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    window.myApp.sendNodeName(name);
    // ipcRenderer.send("asynchronous-message", name);
  };
  return (
    <div className="App">
      <h2>Hello from react</h2>
      <Button type="primary" size={"large"} style={{ marginTop: 20 }}>
        Button
      </Button>
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
      </div>
    </div>
  );
}

export default App;
