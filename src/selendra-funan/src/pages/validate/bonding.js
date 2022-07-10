import React, { createRef } from "react";
import { Card, Spin, Form, Popover, Input } from "antd";
import LayoutComponent from "../../components/Layout";
import { Button, Avatar, Dropdown, Menu, Space } from "antd";
import {
  UserOutlined,
  DownOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const menu = (
  <Menu
    className="dropdown-menu"
    items={[
      {
        label: <h4 className="dropdown-header">accounts</h4>,
      },
      {
        type: "divider",
      },
      {
        label: (
          <div className="dropdown-acc">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "20px",
              }}
            >
              <Avatar
                size="small"
                icon={<UserOutlined />}
                style={{ marginRight: "5px" }}
              />
              <p className="item-info">IRONMAN</p>
            </div>
            <p className="item-title">seZWdNNxzHEkdtMseZWdNNxzHEkdtM...</p>
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
                marginRight: "20px",
              }}
            >
              <Avatar
                size="small"
                icon={<UserOutlined />}
                style={{ marginRight: "5px" }}
              />
              <p className="item-info">IRONMAN_CONTROLLER</p>
            </div>
            <p className="item-title">seZWdNNxzHEkdtMseZWdNNxzHEkdtM...</p>
          </div>
        ),
        key: "1",
      },
    ]}
  />
);

function Bonding() {
  return (
    <LayoutComponent>
      <div className="validate">
        <p className="profile-home">Validate and Earn</p>
        <Card style={{ borderRadius: "8px" }} className="sel-card">
          <p className="bonding-page-title">bonding preferences</p>
          <Form layout="vertical" size="large">
            <Form.Item>
              <Account
                type={"stash account"}
                name={"IRONMAN"}
                info={stash_info}
              />
            </Form.Item>
            <Form.Item>
              <Account
                type={"controller account"}
                name={"IRONMAN_CONTROLLER"}
                info={controller_info}
              />
            </Form.Item>
            <Form.Item>
              <ValueBonded />
            </Form.Item>
            <Form.Item>
              <NotEnoughSel />
            </Form.Item>
            <Form.Item>
              <BondingDuration />
            </Form.Item>
            <Form.Item label="" style={{ marginTop: 40 }}>
              <Button className="buy__button">
                <Link to="/validate/authorize">Bond</Link>
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </LayoutComponent>
  );
}

const NotEnoughSel = () => {
  return (
    <div>
      <p className="not-enough-sel">You don't have enough SEL</p>
      <Button
        style={{
          backgroundColor: "#03a9f4",
          color: "white",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        Buy SEL
      </Button>
    </div>
  );
};

const ValueBonded = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <p className="item-title">
          value bonded
          <span style={{ marginLeft: "5px" }}>
            <Popover content={value_bonded_info}>
              <QuestionCircleOutlined style={{ color: "#2bc3ff" }} />
            </Popover>
          </span>
        </p>
        <p className="validate-item-info">balance 30000 SEL</p>
      </div>
      <div className="validate-item-container">
        <Input
          className="buy_button value-bonded-input"
          placeholder="3000 min"
        />
      </div>
    </>
  );
};

const Account = ({ type, name, info }) => {
  return (
    <div className="validate-item-container ">
      <Avatar
        size="large"
        src="https://www.business2community.com/wp-content/uploads/2022/02/bitcoin-robot-900x600.jpg"
      />
      <div className="validate-input-box">
        <p className="item-title">
          {type}
          <span style={{ marginLeft: "5px" }}>
            <Popover content={info}>
              <QuestionCircleOutlined style={{ color: "#2bc3ff" }} />
            </Popover>
          </span>
        </p>
        <div className="validate-input-box-bottom">
          <p className="item-info">{name}</p>

          <Dropdown
            overlay={menu}
            trigger={["click"]}
            placement="bottomRight"
            className="dropdown"
          >
            <a onClick={(e) => e.preventDefault()} className="item-title">
              <Space>
                NxzHEkdtMnUrVqhXNuUVYa5gkSKtUaYz...
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

const BondingDuration = () => {
  return (
    <div className="validate-item-container">
      <div className="validate-input-box validate-duration">
        <p className="item-title">
          on-chain bonding duration{" "}
          <span>
            <Popover content={duration_info}>
              <QuestionCircleOutlined style={{ color: "#2bc3ff" }} />
            </Popover>
          </span>
        </p>
        <p className="item-info">7 days</p>
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

const controller_info = (
  <div style={{ width: "300px" }}>
    <p>
      The controller account is the account that will be used to control any
      nominating or validating actions. should not match another stash or
      controller.
    </p>
  </div>
);

const value_bonded_info = (
  <div style={{ width: "300px" }}>
    <p>
      The total amount of the stash balance that will be at stake in any
      forthcoming rounds should be less than the free amount available.
    </p>
  </div>
);

const duration_info = (
  <div style={{ width: "300px" }}>
    <p>
      The bonding duration for any staked funds. Needs to be unlock and
      withdrawn to become available.
    </p>
  </div>
);

export default Bonding;
