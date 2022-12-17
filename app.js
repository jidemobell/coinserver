const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

const { job_2, scheduler } = require("./service");

scheduler.addSimpleIntervalJob(job_2);

app.get("/", (req, res) => {
  let message = {message: "welcone to my crypto api"}
  res.send(message);
});

app.get("/data", (req, res) => {
  let rawdata = fs.readFileSync("db.json");
  let data = JSON.parse(rawdata);
  res.send(data);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({ error: 'Route Not Found' });
});

// error handler
app.use(function(err, req, res, next) {
  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(port, () => {
  console.log(`mock app listening on port ${port}`);
});
