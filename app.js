const app = require("express")();

app.get("/", (req, res) => {
  res.send({
    status: "OK",
    message: "home page",
  });
});

app.listen(3000, (req, res) => {
  console.log("started at 3000");
});
