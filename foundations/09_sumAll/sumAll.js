const sumAll = function(num1, num2) {
    let sumNums = 0;

    if (num1 > num2) {
        let storeNum = num1;

        // Set num1 to smaller number
        num1 = num2;
        num2 = storeNum;
    }

    if ((num1 > 0 && num2 > 0) &&
        Number.isInteger(num1) &&
        Number.isInteger(num2)) {
        for (let i = num1; i >= num1 && i <= num2; i++) {
            sumNums += i;
        }

        return sumNums;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
