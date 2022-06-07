document.addEventListener("DOMContentLoaded", test);

function test() {
  const orderName = document.getElementById('order_name');
  const price = document.getElementById('order_price');
  const orderImg = document.getElementById('order__img');

  const urlParams = new URLSearchParams(window.location.search);
  const param_name = urlParams.get('item__title');
  const param_price = urlParams.get('item__price');
  const param_img = urlParams.get('item__img');
  orderName.textContent = "Назва інструменту " + param_name;
  price.textContent = "Ціна " + param_price;
  orderImg.src = param_img;

}
