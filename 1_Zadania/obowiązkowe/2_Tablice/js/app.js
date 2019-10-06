function distFronAvarage(tab){

    let sum;
    for(i=0; i<= tab.length; i++){
        sum = sum + tab[i];
    }

    sum = sum/tab.length;

    tab.forEach(el => {
        el = el-sum;
    })

    return tab;

}

    let tab = [1,2,3,4,5,6,7,]

