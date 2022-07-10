import React from "react";
import { Card, Spin, Form, Input } from "antd";
import LayoutComponent from "../../components/Layout";

import {
  Badge,
  Button,
  Col,
  message,
  Row,
  Iput,
  Avatar,
  Dropdown,
  Menu,
  Space,
} from "antd";
import {
  UserOutlined,
  DownOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

const menu = (
  <Menu
    items={[
      {
        label: (
          <div>
            <h3>accounts</h3>
          </div>
        ),
      },
      {
        label: (
          <div className="dropdown-acc">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                size="small"
                icon={<UserOutlined />}
                style={{ marginRight: "5px" }}
              />
              <p>IRONMAN</p>
            </div>
            <p>seZWdNNxzHEkdtM...</p>
          </div>
        ),
        key: "0",
      },
      {
        label: (
          <div className="dropdown-acc">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                size="small"
                icon={<UserOutlined />}
                style={{ marginRight: "5px" }}
              />
              <p>IRONMAN</p>
            </div>
            <p>seZWdNNxzHEkdtM...</p>
          </div>
        ),
        key: "1",
      },
    ]}
  />
);

function SessionKey() {
  const [modal, setModal] = React.useState(false);
  return (
    <LayoutComponent>
      <p className="profile-home">Session Key</p>
      <Card style={{ borderRadius: "8px" }} className="sel-card">
        <Form layout="vertical" size="large">
          <Form.Item>
            <Account name={"IRONMAN"} type={"stash account"} />
          </Form.Item>
          <Form.Item>
            <Account name={"IRONMAN_CONTROLLER"} type={"controller account"} />
          </Form.Item>
          <Form.Item>
            <Key />
          </Form.Item>
          <Form.Item>
            <div className="generate-session-key">
              <p>Generate Session Key</p>
            </div>
          </Form.Item>
          <Form.Item label="" style={{ marginTop: 40 }}>
            <Button className="buy__button">Set Session Key</Button>
          </Form.Item>
        </Form>
      </Card>
    </LayoutComponent>
  );
}

const Key = () => {
  return (
    <div className="validate-input-box session-key-box">
      <div>
        <p className="item-title">
          key from rotatekeys
          <span style={{ marginLeft: "5px" }}>
            <QuestionCircleOutlined />
          </span>
        </p>
        <p className="item-info">Input</p>
      </div>
    </div>
  );
};

const Account = ({ type, name }) => {
  return (
    <div className="validate-item-container ">
      <Avatar
        size="large"
        src="https://www.business2community.com/wp-content/uploads/2022/02/bitcoin-robot-900x600.jpg"
      />
      <div className="validate-input-box dashed-box">
        <div>
          <p className="item-title">
            {type}
            <span style={{ marginLeft: "5px" }}>
              <QuestionCircleOutlined />
            </span>
          </p>

          <p className="item-info">{name}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <p className="item-title">
            seZWdNNxzHEkdtMnUrVqhXNuUVYa5gkSKtUaYz...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionKey;
