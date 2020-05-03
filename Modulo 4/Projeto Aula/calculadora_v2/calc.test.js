const calculadora = require("./calc");

describe("calculadora", () => {
  it("teste exemplo", () => {
    const numero1 = 23;
    const numero2 = 7;
    expect(23 + 7).toBe(30);
    expect(23 + 7).not.toBe(31);
  });

  describe("soma", () => {
    it("retorna 3 quando 2 somado com 1", () => {
      const numero1 = 2;
      const numero2 = 1;

      expect(calculadora.soma(numero1, numero2)).toBe(3);
    });

    describe("subtracao", () => {
      it("retorna 3 quando 1 subtraido de 2", () => {
        const numero1 = 2;
        const numero2 = 1;

        expect(calculadora.subtracao(numero1, numero2)).toBe(1);
      });
    });

    describe("multiplicacao", () => {
      it("retorna 6 quando 2 multiplicado por 3", () => {
        const numero1 = 2;
        const numero2 = 3;

        expect(calculadora.multiplicacao(numero1, numero2)).toBe(6);
      });
    });

    describe("divisao", () => {
      it("retorna 2 quando 6 dividido por 3", () => {
        const numero1 = 6;
        const numero2 = 3;

        expect(calculadora.divisao(numero1, numero2)).toBe(2);
      });

      it("retorna 0 se divisão por 0", () => {
        const numero1 = 6;
        const numero2 = 0;

        expect(calculadora.divisao(numero1, numero2)).toBe(0);
      });
    });
  });
});
