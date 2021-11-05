module.exports = (x, y, callback) => {
    //Check parameter values
    if (x <= 0 || y <= 0) {
        //Return an error object as first
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x},${y}`));
    }
    else
    {
       //Simulating a delay from database
       //Set null instead of error function
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000);
    }
}



