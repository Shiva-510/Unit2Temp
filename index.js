// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {32} f temperature in °F
 * @returns {0} temperature in °C
 */
let convertToCelsius = prompt('input a number and it will be converted from fahrenheit to celsius') 
function convertToCelsius(f) {
    return (f -  32) / (5/  9);
}
console.log("input fahrenheit",convertToCelsius)

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(f) {
  let message = '';
  const dgrFahr = f * 1;

  if(dgrFahr < 32){
    message = 'very cold';
  }
  else if(32 < dgrFahr < 64){
    message = 'cold';
  }
  else if(64 < dgrFahr < 86){
    message = 'warm';
  }
  else if(86 < dgrFahr < 100){
    message = 'hot';
  }
  else if(dgrFahr >= 100){
    message = 'very hot'
  } 
}

/**
 * @param {100} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function getRandomInt(limit) {
    return Math.floor(Math.random() * limit);
  }
  
  console.log(getRandomInt(100));

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
