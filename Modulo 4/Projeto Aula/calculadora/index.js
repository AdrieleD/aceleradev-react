const prompt = require("prompt-sync")();
const calculadora = require("./calc");

function opcoes() {
  console.log(`
    1 - Somar 
    2 - Subtrair 
    3 - Multiplicar 
    4 - Dividir 
    0 - Sair do programa `);
}

function opcaoSelecionada(opcao) {
  let num1, num2;
  if (opcao !== "0") {
    num1 = Number(prompt("Digite numero 1: "));
    num2 = Number(prompt("Digite numero 2: "));
  }

  if (opcao == "1") {
    return calculadora.soma(num1, num2);
  } else if (opcao == "2") {
    return calculadora.subrtacao(num1, num2);
  } else if (opcao == "3") {
    return calculadora.multiplicacao(num1, num2);
  } else if (opcao == "4") {
    return calculadora.divisao(num1, num2);
  } else if (opcao == "0") {
    return null;
  }
}

let opcao;
while (opcao != "0") {
  opcoes();
  opcao = prompt("Qual o opção? ");
  const resultado = opcaoSelecionada(opcao);

  if (!resultado) {
    console.log("Programa finalizado.");
  } else {
    console.log(`O resultado é ${resultado}.`);
  }
}
