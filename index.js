const hotServerInstance = require("hot-reload-server");

hotServerInstance.start({
  socketHost: "127.0.0.1",
  socketPort: "8000",
  watchDir: "./dist",
  target: "./dist/index.html",
  devServer: "127.0.0.1:8080"
})