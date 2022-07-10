import React from "react";
import LayoutComponent from "../../components/Layout";
import { Card, Table, Tooltip, Avatar } from "antd";
import sel from "../../../public/images/sel.png";

const columns = [
  {
    title: "stash",
    dataIndex: "stash",
    key: "stash",
    width: 180,
  },
  {
    title: "controller",
    dataIndex: "controller",
    key: "controller",
    width: 180,
  },
  {
    title: "rewards",
    dataIndex: "reward",
    key: "reward",
    ellipsis: {
      showTitle: false,
    },
    render: (reward) => (
      <Tooltip placement="topLeft" title={reward}>
        {reward}
      </Tooltip>
    ),
  },
  {
    title: "bonded",
    dataIndex: "bond",
    key: "bond",
    ellipsis: {
      showTitle: false,
    },
    render: (bond) => (
      <Tooltip placement="topLeft" title={bond}>
        {bond}
      </Tooltip>
    ),
  },
  {
    title: "",
    dataIndex: "validate",
    key: "address 3",
    ellipsis: {
      showTitle: false,
    },
    width: 100,
  },
  {
    title: "",
    dataIndex: "nominate",
    key: "address 4",
    ellipsis: {
      showTitle: false,
    },
    width: 60,
  },
];

const data = [
  {
    key: "1",
    stash: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          size="small"
          src="https://www.business2community.com/wp-content/uploads/2022/02/bitcoin-robot-900x600.jpg"
        />
        <p className="truncate item-info">IRONMAN</p>
      </div>
    ),
    controller: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          size="small"
          src="https://www.business2community.com/wp-content/uploads/2022/02/bitcoin-robot-900x600.jpg"
        />
        <p className="truncate item-info">IRONMAN_CONTROLLER</p>
      </div>
    ),
    reward: "30000.35564 SEL",
    bond: "30000.00098 SEL",
    validate: (
      <div className="running-node-box-right" style={{ marginLeft: "16px" }}>
        <div className="running-node-stop-button">
          <div className="stop_icon"></div>
          <p className="item-info">Stop</p>
        </div>
      </div>
    ),
    nominate: (
      <a
        href="https://telemetry.polkadot.io/#list/0x3d7efe9e36b20531f2a735feac13f3cad96798b2d9036a6950dac8076c19c545"
        target="_blank"
      >
        <img src={sel} width="auto" height="30px" />
      </a>
    ),
  },
  {
    key: "2",
    stash: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          size="small"
          src="https://www.business2community.com/wp-content/uploads/2022/02/bitcoin-robot-900x600.jpg"
        />
        <p className="truncate item-info">IRONMAN</p>
      </div>
    ),
    controller: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          size="small"
          src="https://www.business2community.com/wp-content/uploads/2022/02/bitcoin-robot-900x600.jpg"
        />
        <p className="truncate item-info">IRONMAN</p>
      </div>
    ),
    reward: "staked",
    bond: "30000.000985525 SEL",
    validate: (
      <div className="running-node-box-right" style={{ marginLeft: "16px" }}>
        <div className="running-node-stop-button">
          <div className="stop_icon"></div>
          <p className="item-info">Stop</p>
        </div>
      </div>
    ),
    nominate: (
      <a
        href="https://telemetry.polkadot.io/#list/0x3d7efe9e36b20531f2a735feac13f3cad96798b2d9036a6950dac8076c19c545"
        target="_blank"
      >
        <img src={sel} width="auto" height="30px" />
      </a>
    ),
  },
];

const columns2 = [
  {
    title: "validators",
    dataIndex: "stash",
    key: "stash",
    width: 250,
  },
  {
    title: "own stake",
    dataIndex: "ownstake",
    key: "controller",
    width: 150,
  },
  {
    title: "commission",
    dataIndex: "commission",
    key: "reward",
    ellipsis: {
      showTitle: false,
    },
    render: (reward) => (
      <Tooltip placement="topLeft" title={reward}>
        {reward}
      </Tooltip>
    ),
  },
  {
    title: "points",
    dataIndex: "point",
    key: "bond",
    ellipsis: {
      showTitle: false,
    },
    render: (bond) => (
      <Tooltip placement="topLeft" title={bond}>
        {bond}
      </Tooltip>
    ),
  },

  {
    title: "",
    dataIndex: "sel",
    key: "address 4",
    ellipsis: {
      showTitle: false,
    },
    width: 60,
  },
];

const data2 = [
  {
    key: "1",
    stash: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          size="small"
          src="https://www.business2community.com/wp-content/uploads/2022/02/bitcoin-robot-900x600.jpg"
        />
        <p className="truncate item-info">IRONMAN</p>
      </div>
    ),
    ownstake: <p className="truncate item-info">30000.35564 SEL</p>,
    commission: "10%",
    point: "46857",

    sel: (
      <a
        href="https://explorer.selendra.org/validator/seXCVGeASbDpKSFmQJn4vFNCLocKmVA3E9pD2eDp8zngGSD32"
        target="_blank"
      >
        <img src={sel} width="auto" height="30px" />
      </a>
    ),
  },
  {
    key: "1",
    stash: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          size="small"
          src="https://www.business2community.com/wp-content/uploads/2022/02/bitcoin-robot-900x600.jpg"
        />
        <p className="truncate item-info">IRONMAN</p>
      </div>
    ),
    ownstake: <p className="truncate item-info">30000.35564 SEL</p>,
    commission: "10%",
    point: "46857",

    sel: (
      <a
        href="https://explorer.selendra.org/validator/seXCVGeASbDpKSFmQJn4vFNCLocKmVA3E9pD2eDp8zngGSD32"
        target="_blank"
      >
        <img src={sel} width="auto" height="30px" />
      </a>
    ),
  },
];

function Validators() {
  return (
    <LayoutComponent>
      <p className="profile-home">Validate and Earn</p>
      <Card style={{ marginTop: "20px" }}>
        <p>my accounts</p>
        <Table columns={columns} dataSource={data} />
      </Card>
      <Card className="validators">
        <p>all validators</p>
        <div className="validators-info">
          <div className="validators-info-box">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2 className="item-info">300</h2>
            </div>
            <p className="item-title">Total Validators</p>
          </div>
          <div className="validators-info-box ">
            <h2 className="item-info">300</h2>

            <p className="item-title">Active Validators</p>
          </div>
          <div className="validators-info-box">
            <h2 className="item-info">300</h2>
            <p className="item-title">Active Era</p>
          </div>
        </div>
        <Table columns={columns2} dataSource={data2} />
      </Card>
    </LayoutComponent>
  );
}

export default Validators;
