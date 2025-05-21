const args = process.argv.slice(2);  // Get arguments passed to the script

const num = parseInt(args[0]);  // Try to convert the first argument to an integer

if (Number.isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}