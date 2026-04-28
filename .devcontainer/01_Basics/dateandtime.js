let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(Math.floor(Date.now()/1000))

let d = new Date();
console.log(
  d.toLocaleString("en-PK", {
    timeZone: "Asia/Karachi"
  })
);