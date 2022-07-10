const { spawnSync, exec, execSync } = require("child_process");
const fs = require("fs");
// const {} = require("");

const script = fs.readFileSync("test.sh", "utf8");
console.log(typeof script);

execSync(script, (err, stdout, stderr) => {
  console.log(`error: ${err}`);
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

const SELENDRA_DB_NAME = "selendradb21";
const CONTAINER_NAME = "container21";
const NODE_NAME = "node21";

console.log("hi");

try {
  const run_docker_container = `sudo docker container run --network="host" --name ${CONTAINER_NAME} -v /home/$USER/${SELENDRA_DB_NAME}:/selendra/data selendrachain/selendra-chain:latest --base-path selendra/data --chain cardamom --port 30333 --rpc-port 9933 --ws-port 9944 --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" --validator --name ${NODE_NAME} --bootnodes /ip4/157.245.56.213/tcp/30333/p2p/12D3KooWDLR899Spcx4xJ3U8cZttv9zjzJoey3HKaTZiNqwojZJB`;
  const result = execSync(run_docker_container).toString();
  console.log(result);
} catch (error) {
  console.log(`Status Code: ${error.status} with '${error.message}'`);
}

// const child = spawnSync(script);
// console.log("stdout here1: \n" + child.stdout);
// console.log("stderr here1: \n" + child.stderr);
