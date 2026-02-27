const leapYears = function(year) {
    if (Number.isInteger(year)) {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = leapYears;
