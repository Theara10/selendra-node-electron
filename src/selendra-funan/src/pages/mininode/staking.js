import React from "react";
import Icon from "@ant-design/icons";
import { Card, Spin, Form, Input } from "antd";
import LayoutComponent from "../../components/Layout";
// import AccountSelector from "../../components/AccountSelector";
import { Badge, Button, Col, message, Row } from "antd";
import { Link } from "react-router-dom";

import sel from "../../../public/images/sel.png";

function Staking() {
  const [running, setRunning] = React.useState(false);
  return (
    <LayoutComponent>
      {!running ? (
        <div>
          <p className="profile-home">Prepare Selendra on the Mininode</p>
          <Card style={{ borderRadius: "8px" }} className="sel-card">
            <Form layout="vertical" size="large">
              <Form.Item label="Chain Directory">
                <Input
                  className="buy__input"
                  placeholder="Mininode"
                  //   value={destination}
                  //   onChange={(e) => setDestination(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Node Container">
                <Input
                  className="buy__input"
                  placeholder="Selendra"
                  //   value={amount}
                  //   onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Name your node">
                <Input
                  className="buy__input"
                  placeholder="my-first-selendra-node"
                  //   value={amount}
                  //   onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="" style={{ marginTop: 40 }}>
                <Button
                  className="buy__button"
                  onClick={() => {
                    setRunning(true);
                  }}
                >
                  Run
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      ) : (
        <div>
          <p className="profile-home">Running the Mininode</p>
          <Card style={{ marginTop: "20px" }}>
            <p>My Node</p>
            <div className="running-node-box">
              <p>node's name</p>
              <div className="running-node-box-right">
                <div className="running-node-stop-button">
                  <div className="stop_icon"></div>
                  <p>Stop</p>
                </div>
                <a
                  href="https://telemetry.polkadot.io/#list/0x3d7efe9e36b20531f2a735feac13f3cad96798b2d9036a6950dac8076c19c545"
                  target="_blank"
                >
                  <img src={sel} width="auto" height="30px" />
                </a>
              </div>
            </div>
          </Card>
          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "#03a9f4",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <Link to="/validate/bonding">{`-> Continue to Validate`}</Link>
          </Button>
        </div>
      )}
    </LayoutComponent>
  );
}

export default Staking;
