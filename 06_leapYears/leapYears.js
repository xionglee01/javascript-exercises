const leapYears = function(year) {
    if(!(year % 4) && year % 100)
        return true;
    else if(!(year % 100) && !(year % 400))
        return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
