const PROXY_CONNFIG = [
  {
    context: ["/api"],
    target: "http://localhost:8080",
    secure: false,
    LogLevel: "dedug",
  },
];

module.exports = PROXY_CONNFIG;
