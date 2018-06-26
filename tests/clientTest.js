var Nightmare = require("nightmare");

//example test
new Nightmare({ show: true })
//test code here

.end()
// Execute commands
.then(function() {
  console.log("Done!");
})
// Catch errors
.catch(function(err) {
  console.log(err);
});
