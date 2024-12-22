// Funkcija, kuri priima temperatūrą ir drėgmę.
function predictSnowfall(temperatures, humidity) {
  // Sniego tikimybė pradžioje.
  let probability = 0;

  // Temperatūros masyvui sudėti naudojame reduce funkciją.
  const avgTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;

  // Tikriname ar apskaičiuota vidutinė temperatūra yra aukštesnė nei 0, jei taip pridedame 35 pagal sąlygą.
  if (avgTemp < 0) {
    probability += 35;
  }

  // Tikriname ar drėgmė yra aukštesnė nei 80, jei taip tai pridedam 40 prie sniego tikimybės.
  if (humidity > 80) {
    probability += 40;
  }

  // Prisiskiriame 'boolean' sąlygą kintamąjam 'willSnow' iš sąlygos.
  const willSnow = probability > 70;

  // Skaičiuojame sniego gylį. 
  // Sukuriame naują kintamąjį.
  let expectedDepth;
  // Jeigu 'willSnow' = true, 'expectedDepth' skaičiuojame pagal duotą formulę, jei ne 0.
  if (willSnow) {
    expectedDepth = Math.round((100 - avgTemp) * humidity / 100);
  } else {
    expectedDepth = 0;
  }
  // Funkcija grąžina gautas reikšmes.
  return {
    willSnow,
    probability,
    expectedDepth
  };
}

let prediction1 = predictSnowfall(
  [
    -6.8, -7.1, -6.9, -6.2, -5.4, -4.8, -4.1, -3.9, -3.5, -3.2, -3.0, -3.3,
    -3.7, -4.2, -4.9, -5.3, -5.8, -6.2, -6.5, -6.8, -7.0, -7.2, -7.1, -6.9,
  ],
  88
);

let prediction2 = predictSnowfall(
  [
    -1.5, -1.3, -1.0, -0.8, -0.7, -0.9, -1.2, -1.4, -1.7, -2.0, -2.2, -2.4,
    -2.5, -2.3, -2.1, -1.8, -1.6, -1.4, -1.3, -1.5, -1.8, -2.1, -2.3, -2.4,
  ],
  60
);

console.log(prediction1);
console.log(prediction2);
