const calculator = require('./Calculator.js').calculator;
test("return result for love calculator",()=>{
    expect(calculator("Adeola","Tomiwa")).toBe(40);
});