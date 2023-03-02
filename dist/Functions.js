"use strict";
function calculateTax(income) {
    if (income < 50000)
        return income * 0.5;
    else
        return income * 1.5;
}
function calculateTax2(income, yearTax) {
    if (yearTax < 2022)
        return income * 0.5;
    else
        return income * 1.5;
}
calculateTax2(10000, 2022);
function calculateTax3(income, yearTax = 2022) {
    if (yearTax < 2022)
        return income * 0.5;
    else
        return income * 1.5;
}
//# sourceMappingURL=Functions.js.map