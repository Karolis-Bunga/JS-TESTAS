/* ------------------------------ TASK 8 -------------------------------------------
Sukurkite klasę "AdvancedCalculator" (naudokite ES6), kuri sukuria objektus su šiais metodais:
1. power() - priima du skaičius (bazę ir laipsnį) ir grąžina bazės pakėlimą laipsniu.
2. squareRoot() - priima vieną skaičių ir grąžina jo kvadratinę šaknį.
3. modulo() - priima du skaičius ir grąžina pirmojo skaičiaus liekaną padalijus iš antrojo.
4. factorial() - priima vieną skaičių ir grąžina jo faktorialą.
------------------------------------------------------------------------------------ */

class AdvancedCalculator {
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  squareRoot(number) {
    return Math.sqrt(number);
  }

  modulo(a, b) {
    return a % b;
  }

  factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }
}

// Test
const advancedCalculator = new AdvancedCalculator();
console.log(advancedCalculator.power(2, 3)); // Rezultatas: 8
console.log(advancedCalculator.squareRoot(16)); // Rezultatas: 4
console.log(advancedCalculator.modulo(10, 4)); // Rezultatas: 2
console.log(advancedCalculator.factorial(5)); // Rezultatast: 120
