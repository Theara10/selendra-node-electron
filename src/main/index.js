const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { spawnSync, execFile, execSync, exec } = require("child_process");
const fs = require("fs");

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, "preload.js"),
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();
};

ipcMain.handle("node", async (event, args) => {
  let script = await fs.readFileSync(
    path.resolve(__dirname, "./test2.sh"),
    "utf-8"
  );

  // const child = spawnSync(script);
  // console.log("stdout here1: \n" + child.stdout);
  // console.log("stderr here1: \n" + child.stderr);

  execSync(script, (err, stdout, stderr) => {
    console.log(`error: ${err}`);
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  const SELENDRA_DB_NAME = "selendradb5";
  const CONTAINER_NAME = "container5";
  const NODE_NAME = args;

  // console.log("hi", args);

  try {
    const run_docker_container = `sudo docker container run --network="host" --name ${CONTAINER_NAME} -v /home/$USER/${SELENDRA_DB_NAME}:/selendra/data selendrachain/selendra-chain:latest --base-path selendra/data --chain cardamom --port 30333 --rpc-port 9933 --ws-port 9944 --telemetry-url "wss://telemetry.polkadot.io/submit/ 0" --validator --name ${NODE_NAME} --bootnodes /ip4/157.245.56.213/tcp/30333/p2p/12D3KooWDLR899Spcx4xJ3U8cZttv9zjzJoey3HKaTZiNqwojZJB`;
    const result = execSync(run_docker_container).toString();
    console.log(result);
  } catch (error) {
    console.log(`Status Code: ${error.status} with '${error.message}'`);
  }
});

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// const { app, BrowserWindow } = require("electron");
// const path = require("path");

// if (require("electron-squirrel-startup")) {
//   app.quit();
// }

// const createWindow = () => {
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
//     },
//   });

//   mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

//   mainWindow.webContents.openDevTools();
// };

// app.on("ready", createWindow);

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
