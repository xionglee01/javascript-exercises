const removeFromArray = function() {
    let arr = arguments[0];
    for(let i = 1; i < arguments.length; i++)
    {
        let indextoRemove = arr.indexOf(arguments[i]);
        if(indextoRemove >= 0)
        {
            arr.splice(indextoRemove, 1);
        }
    }
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
