const restaurantes = [];
const valores = [];
const gorjetas = [];

for (let i = 0; i < 3; i++) {
  const res = prompt("Nome restaurante");
  restaurantes.push(res);
  const val = prompt(`Valor total do restaurante ${res}`);
  valores.push(val);
}

function calcularGorjeta(val) {
  if (val < 50) {
    return val * 0.2;
  } else if (val >= 50 && val <= 200) {
    return val * 0.15;
  } else {
    return val * 0.1;
  }
}

for (const val of valores) {
  const gorj = calcularGorjeta(val);
  gorjetas.push(gorj);
}

coletarDados(restaurantes, valores, gorjetas);

function coletarDados(rests, vals, gorjs) {
  for (let i = 0; i < 3; i++) {
    detalhamento(restaurantes[i], valores[i], gorjetas[i]);
  }
}

function detalhamento(restaurante, valor, gorjeta) {
  return console.log(
    `Restaurante:${restaurante} - [Valor:${valor} | Gorjeta:${gorjeta} | Valor total:${
      parseInt(valor) + parseInt(gorjeta)
    }]`
  );
}
