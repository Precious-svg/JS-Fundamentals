function add(a, b) {
    return a + b;  // Return the sum of a and b
  }
  
  const num1 = parseInt(process.argv[2]);  // Parse the first argument as an integer
  const num2 = parseInt(process.argv[3]);  // Parse the second argument as an integer
  
  if (isNaN(num1) || isNaN(num2)) {
    console.log("NAN");
  } else {
    console.log(add(num1, num2));  // Call add() and print the result
  }
  