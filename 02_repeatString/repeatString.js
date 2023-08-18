const repeatString = function(string, num) {
    
    let new_str = "";
    
    if(num < 0)
        return "ERROR";

    for(let i = 0; i < num; i++)
    {
        new_str += string;
    }

    return new_str;
};

// Do not edit below this line
module.exports = repeatString;
