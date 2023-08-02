function gotoPage2() {
  let inputProduct = document.getElementById("product");
  let inputQuantity = document.getElementById("quantity");
  window.location.href = `./page2.html?product=${product.value}&quantity=${quantity.value}`;
}
