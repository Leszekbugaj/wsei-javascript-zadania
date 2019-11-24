function Calculator(){
    this.history = [];
}

Calculator.prototype.add = function(num1, num2){
    const result = num1 + num2;
    this.history.push("added " + num1 + " to " + num2 + " " + result);
    return result;
}

Calculator.prototype.multply = function(num1, num2){
    const result = num1 * num2;
    this.history.push("multiplied " + num1 + " with " + num2 + " got " + result);
    return result;
}

Calculator.prototype.substract = function(num1, num2){
    const result = num1 - num2;
    this.history.push("substracted " + num1 + " from " + num2 + " got " + result);
    return result;
}

Calculator.prototype.divide = function(num1, num2){
    const result = num1 / num2;
    this.history.push("dividied " + num1 + " by " + num2 + " got " + result);
    return result;
}

Calculator.prototype.printOperations = function(){
    console.table(this.history);
}

Calculator.prototype.clearOperations = function(){
    this.history = [];
}

Calculator = new Calculator();

Calculator.add(2, 2);
Calculator.multply(3, 2);
Calculator.substract(5, 3);
Calculator.divide(6, 2);
Calculator.printOperations();
Calculator.clearOperations();
Calculator.printOperations();

