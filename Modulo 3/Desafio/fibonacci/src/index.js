"use strict";

const fibonacci = () => {
  let sequenciaDeFibonacci = [];
  let num1 = 1,
    num2 = 0,
    soma = 0;

  while (soma <= 350) {
    sequenciaDeFibonacci.push(soma);

    soma = num1 + num2;
    num1 = num2;
    num2 = soma;
  }

  return sequenciaDeFibonacci;
};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci,
};
