const convertToCelsius = function(temp) {
    let result = (temp - 32) * 5/9;
    if (result % 1 !== 0) result = result.toFixed(1);

    return Number(result);
};

const convertToFahrenheit = function(temp) {
    let result = (temp * (9/5)) + 32;
    if (result % 1 !== 0) result = result.toFixed(1);

    return Number(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
