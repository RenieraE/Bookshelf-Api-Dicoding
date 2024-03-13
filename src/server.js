const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const serverRunning = async (port, host) => {
  const server = Hapi.server({
    port,
    host,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(
    `saya sampe pusing pak, tapi berhasil jalan di ${server.info.uri}`
  );
};

serverRunning(
  9000,
  process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0"
);
