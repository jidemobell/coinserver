const {
  ToadScheduler,
  SimpleIntervalJob,
  Task,
} = require("toad-scheduler");


const scheduler = new ToadScheduler();


const generateValues = () =>
  (Math.random() * Math.pow(10, Math.floor(Math.random() * 6))).toFixed(4);

const task = new Task('runner to generate mock Live data', () => {
  let data = {
    target: "USD",
    rates: { "BTC": generateValues(), "ETH": generateValues() },
    timestamp: 1671204850
   }
   console.log(data)
 })


const job_2 = new SimpleIntervalJob({ seconds: 50, }, task)

module.exports = {
  scheduler,
  job_2,
};
