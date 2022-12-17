const {
  ToadScheduler,
  SimpleIntervalJob,
  Task,
} = require("toad-scheduler");
const fs = require("fs");


const scheduler = new ToadScheduler();
const timestamp = 1671204850

const generateValues = () =>
  (Math.random() * Math.pow(10, Math.floor(Math.random() * 6))).toFixed(4);
const getTCurrentTimestamp = () => Math.floor(Date.now() / 1000)
  

const task = new Task('runner to generate mock Live data', () => {
  let data = {
    target: "USD",
    rates: { "BTC": generateValues(), "ETH": generateValues() },
    timestamp: getTCurrentTimestamp()
   }

   fs.writeFileSync('db.json', JSON.stringify(data));
 })


const job_2 = new SimpleIntervalJob({ seconds: 1200, }, task)

module.exports = {
  scheduler,
  job_2,
};
