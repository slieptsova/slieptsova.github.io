
//TASK 01 Function

function task01(){

    var number = parseInt(prompt('Enter number', 2));
    var degree = parseInt(prompt('Enret pow', 3));


    if (isNaN(number) || isNaN(degree)) {
        console.log('Use ONLY numbers! ( ˘︹˘ )');
    }
    else {
        powq(number, degree);
    }


    //Pow function

    function powq(x, n) {
        var result;
        // math rules for different degrees
        switch (true){
            case (n == 0):
                result = 1;
                break;
            case (n == 1):
                result = x;
                break;
            case (n < 0):
                result = x;
                for (var j = 1; j < (n * (-1)); j++) {
                    result = result * x;
                }
                result = 1 / result;
                break;
            default:
                result = x;
                for (var i = 1; i < n; i++) {
                    result = result * x;
                }
        }
        console.log ("Number " + x + " in degree " + n + " is: " + result);
        return result;
    }

}