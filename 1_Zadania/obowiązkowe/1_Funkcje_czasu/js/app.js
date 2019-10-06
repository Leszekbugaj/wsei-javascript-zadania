function countHello(number){
    var number2 = 1;
    var interval = setInterval(function(){
        console.log('Hello ', number2++)
        if(number === number2 + 1) clearInterval(interval);
    },1000);
}
countHello(10);