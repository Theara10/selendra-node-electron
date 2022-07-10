import React from "react";
import { Card, Spin, Form, Input } from "antd";
import LayoutComponent from "../../components/Layout";
import { Link } from "react-router-dom";
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
  Popover,
} from "antd";
import {
  UserOutlined,
  DownOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;

const menu1 = (
  <Menu
    items={[
      { label: <p>SEL</p>, key: 0 },
      { label: <p>Eth</p>, key: 1 },
    ]}
  />
);

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

function Authorize() {
  return (
    <LayoutComponent>
      <div className="validate">
        <p className="profile-home">Validate and Earn</p>
        <Card style={{ borderRadius: "8px" }} className="sel-card">
          <p className="bonding-page-title">authorize transaction</p>
          <p className="item-title">
            Fees of #8.76 micro SEL will be applied to the submission{" "}
          </p>
          <Form layout="vertical" size="large">
            <Form.Item>
              <Account
                type={"sending from my account"}
                name={"IRONMAN"}
                info={stash_info}
              />
            </Form.Item>

            <Form.Item>
              <div style={{ marginTop: "10px" }}>
                <p className="validate-item-info">
                  unlock account with password
                </p>
                <div className="validate-item-container">
                  <Input
                    className="buy_button value-bonded-input"
                    placeholder="password"
                  />
                </div>
              </div>
            </Form.Item>

            <Form.Item>
              <div className="validate-item-container">
                <div className="validate-item-duration authorize-callhash">
                  <p className="item-title">call hash</p>
                  <p className="item-info">
                    seZWdNNxzHEkdtMnUrVqhXNuUVYa5gkSKtUaYzdtMnUrVqh
                  </p>
                </div>
              </div>
            </Form.Item>

            <Form.Item label="" style={{ marginTop: 40 }}>
              <Button className="buy__button">
                <Link to="/validate/validators">Sign and Submit</Link>
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </LayoutComponent>
  );
}

const Account = ({ type, name, info }) => {
  return (
    <div className="validate-item-container ">
      <Avatar
        size="large"
        src="https://www.business2community.com/wp-content/uploads/2022/02/bitcoin-robot-900x600.jpg"
      />
      <div className="validate-input-box dashed-box">
        <p className="item-title">{type}</p>
        <div className="validate-input-box-bottom">
          <p className="item-info">{name}</p>
          <p className="item-title"> NxzHEkdtMnUrVqhXNuUVYa5gkSKtUaYz...</p>
        </div>
      </div>
    </div>
  );
};

const stash_info = (
  <div style={{ width: "300px" }}>
    <p>
      Think of the stash as your cold wallet and the controller as your hot
      wallet. Funding operations are controlled by the stash, any other
      non-funding actions by the controller itself.
    </p>
  </div>
);

export default Authorize;
