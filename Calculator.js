function calculator(name,crush){
    var score = 0;
    const percent = 10;
    var distinct = Array.from(new Set(crush));
    distinct.forEach(n => {
        var iscontain =name.includes(n);
        if(iscontain){
            score++;
        }
    });
    score*=2;
    console.log(score);
    let total = score * percent;
    if(total > 100){
        return 100;
    }
    return total;
}
exports.calculator = calculator;