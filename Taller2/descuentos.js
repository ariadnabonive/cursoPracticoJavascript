function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function buttonPriceDiscount() {
  const inputPrice = document.getElementById("input-price");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("input-discount");
  const priceDiscount = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    priceDiscount
  );

  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = "El precio con descuento es $" + precioConDescuento;
}
