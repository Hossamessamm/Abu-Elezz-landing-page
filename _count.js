const fs = require("fs");
const s = fs.readFileSync("app.js", "utf8");
const dates = [...s.matchAll(/date: "(\d{4}-\d{2}-\d{2})"/g)].map((m) => m[1]);
const p2 = dates.filter((d) => d < "2027-02-01");
const p1 = dates.filter((d) => d >= "2027-02-01");
const bad = dates.filter((d) => {
  const [y, m, day] = d.split("-").map(Number);
  const w = new Date(y, m - 1, day).getDay();
  return w !== 5 && w !== 2;
});
console.log("p2", p2.length, "p1", p1.length, "bad", bad.length);
